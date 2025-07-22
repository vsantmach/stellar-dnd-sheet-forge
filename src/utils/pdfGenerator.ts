import jsPDF from 'jspdf';
import { Character } from './types';

export const generateCharacterPDF = (character: Character) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const pageHeight = pdf.internal.pageSize.height;

  const drawSectionHeader = (x: number, y: number, width: number, label: string) => {
    pdf.setFillColor(50, 50, 50);
    pdf.rect(x, y, width, 8, 'F');
    pdf.setFontSize(8);
    pdf.setTextColor(255);
    pdf.setFont('helvetica', 'bold');
    pdf.text(label, x + 2, y + 6);
    pdf.setTextColor(0);
  };

  const drawField = (x: number, y: number, width: number, height: number, label: string, value?: string) => {
    pdf.setDrawColor(0);
    pdf.setLineWidth(0.5);
    pdf.rect(x, y, width, height);
    pdf.setFontSize(7);
    pdf.setTextColor(100);
    pdf.setFont('helvetica', 'normal');
    pdf.text(label, x + 2, y + height - 2);
    if (value) {
      pdf.setFontSize(10);
      pdf.setTextColor(0);
      pdf.setFont('helvetica', 'bold');
      pdf.text(value, x + 3, y + height - 8);
    }
  };

  const drawAbilityScore = (x: number, y: number, ability: string, score: number = 10) => {
    const modifier = Math.floor((score - 10) / 2);
    const modText = modifier >= 0 ? `+${modifier}` : `${modifier}`;
    pdf.setDrawColor(0);
    pdf.setLineWidth(1);
    pdf.rect(x, y, 35, 60);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text(ability, x + 17.5, y + 12, { align: 'center' });
    pdf.circle(x + 17.5, y + 30, 12);
    pdf.setFontSize(16);
    pdf.text(score.toString(), x + 17.5, y + 34, { align: 'center' });
    pdf.rect(x + 7, y + 45, 21, 12);
    pdf.setFontSize(12);
    pdf.text(modText, x + 17.5, y + 54, { align: 'center' });
  };

  const drawSkill = (x: number, y: number, skill: string, bonus: string = '+0', proficient: boolean = false) => {
    pdf.circle(x + 5, y + 5, 3);
    if (proficient) pdf.circle(x + 5, y + 5, 2);
    pdf.rect(x + 12, y + 1, 18, 8);
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0);
    pdf.text(bonus, x + 21, y + 6, { align: 'center' });
    pdf.text(skill, x + 35, y + 6);
  };

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0);
  pdf.text('D&D 5th Edition', pageWidth / 2, 10, { align: 'center' });
  pdf.setFontSize(20);
  pdf.text('CHARACTER SHEET', pageWidth / 2, 18, { align: 'center' });

  let yPos = 25;
  drawField(10, yPos, 85, 12, 'CHARACTER NAME', character.name);
  drawField(100, yPos, 45, 12, 'CLASS & LEVEL', `${character.class} ${character.level}`);
  drawField(150, yPos, 45, 12, 'BACKGROUND', character.background || '');
  yPos += 15;
  drawField(10, yPos, 45, 12, 'RACE', character.race);
  drawField(60, yPos, 45, 12, 'ALIGNMENT', character.alignment || '');
  drawField(110, yPos, 40, 12, 'PLAYER NAME', '');
  drawField(155, yPos, 40, 12, 'EXPERIENCE POINTS', character.experiencePoints?.toString() || '0');
  yPos += 20;

  const leftX = 10;
  const centerX = 65;
  const rightX = 145;
  const abilities = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];
  const abilityMap = {
    STRENGTH: character.abilityScores?.strength || 10,
    DEXTERITY: character.abilityScores?.dexterity || 10,
    CONSTITUTION: character.abilityScores?.constitution || 10,
    INTELLIGENCE: character.abilityScores?.intelligence || 10,
    WISDOM: character.abilityScores?.wisdom || 10,
    CHARISMA: character.abilityScores?.charisma || 10,
  };

  let leftY = yPos;
  abilities.forEach((ability, i) => {
    drawAbilityScore(leftX, leftY + (i * 65), ability, abilityMap[ability]);
  });

  drawField(leftX, leftY + 400, 50, 15, 'INSPIRATION');
  drawField(leftX, leftY + 420, 50, 15, 'PROFICIENCY BONUS', `+${character.proficiencyBonus || 2}`);

  let centerY = yPos;
  drawSectionHeader(centerX, centerY, 90, 'SAVING THROWS');
  centerY += 10;
  const saves = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  saves.forEach((save, i) => {
    const st = character.savingThrows?.[save.toLowerCase()];
    drawSkill(centerX, centerY + (i * 12), save, st?.bonus ?? '+0', st?.proficient ?? false);
  });

  centerY += 85;
  drawSectionHeader(centerX, centerY, 90, 'SKILLS');
  centerY += 10;
  const skills = [
    'Acrobatics (Dex)', 'Animal Handling (Wis)', 'Arcana (Int)', 'Athletics (Str)',
    'Deception (Cha)', 'History (Int)', 'Insight (Wis)', 'Intimidation (Cha)',
    'Investigation (Int)', 'Medicine (Wis)', 'Nature (Int)', 'Perception (Wis)',
    'Performance (Cha)', 'Persuasion (Cha)', 'Religion (Int)', 'Sleight of Hand (Dex)',
    'Stealth (Dex)', 'Survival (Wis)'
  ];
  skills.forEach((skill, i) => {
    const key = skill.split(' ')[0].toLowerCase();
    const sk = character.skills?.[key];
    drawSkill(centerX, centerY + (i * 10), skill, sk?.bonus ?? '+0', sk?.proficient ?? false);
  });

  let rightY = yPos;
  const statBox = (label: string, value: string, x: number, y: number) => {
    pdf.rect(x, y, 35, 35);
    pdf.setFontSize(8);
    pdf.text(label, x + 17.5, y + 8, { align: 'center' });
    pdf.setFontSize(20);
    pdf.text(value, x + 17.5, y + 25, { align: 'center' });
  };
  statBox('ARMOR CLASS', (character.armorClass || 10).toString(), rightX, rightY);
  statBox('INITIATIVE', '+0', rightX + 40, rightY);
  rightY += 40;
  statBox('SPEED', (character.speed || 30).toString(), rightX, rightY);

  rightY += 50;
  drawField(rightX, rightY, 75, 20, 'HIT POINT MAXIMUM', (character.hitPoints?.maximum || 8).toString());
  rightY += 25;
  drawField(rightX, rightY, 75, 20, 'CURRENT HIT POINTS', (character.hitPoints?.current || 8).toString());
  rightY += 25;
  drawField(rightX, rightY, 75, 20, 'TEMPORARY HIT POINTS', (character.hitPoints?.temporary || 0).toString());
  rightY += 35;
  drawField(rightX, rightY, 35, 20, 'HIT DICE');
  pdf.setFontSize(10);
  pdf.text(character.hitDice || '1d8', rightX + 17.5, rightY + 12, { align: 'center' });

  pdf.rect(rightX + 40, rightY, 35, 30);
  pdf.setFontSize(8);
  pdf.text('DEATH SAVES', rightX + 57.5, rightY + 8, { align: 'center' });
  pdf.setFontSize(6);
  pdf.text('SUCCESSES', rightX + 42, rightY + 15);
  pdf.text('○ ○ ○', rightX + 67, rightY + 15);
  pdf.text('FAILURES', rightX + 42, rightY + 25);
  pdf.text('○ ○ ○', rightX + 67, rightY + 25);

  rightY += 45;
  drawSectionHeader(leftX, rightY, 125, 'ATTACKS & SPELLCASTING');
  rightY += 10;
  const attackHeaders = ['NAME', 'ATK BONUS', 'DAMAGE/TYPE'];
  const attackX = [leftX, leftX + 60, leftX + 85];
  const widths = [60, 25, 40];
  attackHeaders.forEach((text, i) => {
    pdf.rect(attackX[i], rightY, widths[i], 10);
    pdf.setFontSize(8);
    pdf.text(text, attackX[i] + 2, rightY + 7);
  });
  for (let i = 0; i < 3; i++) {
    rightY += 10;
    pdf.rect(leftX, rightY, 60, 15);
    pdf.rect(leftX + 60, rightY, 25, 15);
    pdf.rect(leftX + 85, rightY, 40, 15);
  }

  pdf.addPage();
  yPos = 20;
  drawSectionHeader(leftX, yPos, 90, 'OTHER PROFICIENCIES & LANGUAGES');
  drawField(leftX, yPos + 8, 90, 100, '');
  drawSectionHeader(rightX, yPos, 90, 'FEATURES & TRAITS');
  drawField(rightX, yPos + 8, 90, 100, '');
  yPos += 118;
  drawSectionHeader(leftX, yPos, 90, 'EQUIPMENT');
  drawField(leftX, yPos + 8, 90, 60, '');
  drawSectionHeader(rightX, yPos, 90, 'CHARACTER BACKSTORY');
  drawField(rightX, yPos + 8, 90, 60, '');

  pdf.save(`ficha-${character.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};
