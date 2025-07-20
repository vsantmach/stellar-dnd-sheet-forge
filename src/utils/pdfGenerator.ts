import jsPDF from 'jspdf';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

export const generateCharacterPDF = (character: Character) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const pageHeight = pdf.internal.pageSize.height;
  
  // Helper function to draw a bordered box with label
  const drawField = (x: number, y: number, width: number, height: number, label: string, value?: string) => {
    // Draw border
    pdf.setDrawColor(0);
    pdf.setLineWidth(1);
    pdf.rect(x, y, width, height);
    
    // Draw label
    pdf.setFontSize(8);
    pdf.setTextColor(100);
    pdf.setFont('helvetica', 'normal');
    pdf.text(label, x + 2, y + height - 2);
    
    // Draw value if provided
    if (value) {
      pdf.setFontSize(10);
      pdf.setTextColor(0);
      pdf.setFont('helvetica', 'bold');
      pdf.text(value, x + 3, y + height - 8);
    }
  };

  // Helper function to draw ability score box (official layout)
  const drawAbilityScore = (x: number, y: number, ability: string, score: number = 10) => {
    const modifier = Math.floor((score - 10) / 2);
    const modText = modifier >= 0 ? `+${modifier}` : `${modifier}`;
    
    // Main box
    pdf.setDrawColor(0);
    pdf.setLineWidth(1);
    pdf.rect(x, y, 35, 60);
    
    // Ability name
    pdf.setFontSize(10);
    pdf.setTextColor(0);
    pdf.setFont('helvetica', 'bold');
    pdf.text(ability, x + 17.5, y + 12, { align: 'center' });
    
    // Score circle
    pdf.circle(x + 17.5, y + 30, 12);
    pdf.setFontSize(16);
    pdf.text(score.toString(), x + 17.5, y + 34, { align: 'center' });
    
    // Modifier box
    pdf.rect(x + 7, y + 45, 21, 12);
    pdf.setFontSize(12);
    pdf.text(modText, x + 17.5, y + 54, { align: 'center' });
  };

  // Helper function to draw skill with proficiency
  const drawSkill = (x: number, y: number, skill: string, bonus: string = '+0', proficient: boolean = false) => {
    // Proficiency circle
    pdf.circle(x + 5, y + 5, 3);
    if (proficient) {
      pdf.circle(x + 5, y + 5, 2);
    }
    
    // Bonus box
    pdf.rect(x + 12, y + 1, 18, 8);
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0);
    pdf.text(bonus, x + 21, y + 6, { align: 'center' });
    
    // Skill name
    pdf.text(skill, x + 35, y + 6);
  };

  // Title
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0);
  pdf.text('D&D 5th Edition', pageWidth / 2, 10, { align: 'center' });
  pdf.setFontSize(20);
  pdf.text('CHARACTER SHEET', pageWidth / 2, 18, { align: 'center' });

  // Top section - Character basic info
  let yPos = 25;
  
  // First row
  drawField(10, yPos, 85, 12, 'CHARACTER NAME', character.name);
  drawField(100, yPos, 45, 12, 'CLASS & LEVEL', `${character.class} ${character.level}`);
  drawField(150, yPos, 45, 12, 'BACKGROUND');
  
  yPos += 15;
  
  // Second row  
  drawField(10, yPos, 45, 12, 'RACE', character.race);
  drawField(60, yPos, 45, 12, 'ALIGNMENT');
  drawField(110, yPos, 40, 12, 'PLAYER NAME');
  drawField(155, yPos, 40, 12, 'EXPERIENCE POINTS');
  
  yPos += 20;

  // Main layout - 3 columns like official sheet
  const leftColumnX = 10;
  const centerColumnX = 65;
  const rightColumnX = 145;
  
  // LEFT COLUMN - Ability Scores
  let leftY = yPos;
  const abilities = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
  const abilityNames = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];
  
  abilities.forEach((ability, index) => {
    drawAbilityScore(leftColumnX, leftY + (index * 65), abilityNames[index], 10);
  });

  // Inspiration
  drawField(leftColumnX, leftY + 400, 50, 15, 'INSPIRATION');
  
  // Proficiency Bonus
  drawField(leftColumnX, leftY + 420, 50, 15, 'PROFICIENCY BONUS', '+2');

  // CENTER COLUMN - Skills, Saves, etc.
  let centerY = yPos;
  
  // Saving Throws
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('SAVING THROWS', centerColumnX, centerY);
  centerY += 10;
  
  const saves = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  saves.forEach((save, index) => {
    drawSkill(centerColumnX, centerY + (index * 12), save);
  });
  
  centerY += 85;
  
  // Skills
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('SKILLS', centerColumnX, centerY);
  centerY += 10;
  
  const skills = [
    'Acrobatics (Dex)', 'Animal Handling (Wis)', 'Arcana (Int)', 'Athletics (Str)',
    'Deception (Cha)', 'History (Int)', 'Insight (Wis)', 'Intimidation (Cha)',
    'Investigation (Int)', 'Medicine (Wis)', 'Nature (Int)', 'Perception (Wis)',
    'Performance (Cha)', 'Persuasion (Cha)', 'Religion (Int)', 'Sleight of Hand (Dex)',
    'Stealth (Dex)', 'Survival (Wis)'
  ];
  
  skills.forEach((skill, index) => {
    drawSkill(centerColumnX, centerY + (index * 10), skill);
  });

  // RIGHT COLUMN - Combat Stats
  let rightY = yPos;
  
  // Armor Class
  pdf.rect(rightColumnX, rightY, 35, 35);
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ARMOR CLASS', rightColumnX + 17.5, rightY + 8, { align: 'center' });
  pdf.setFontSize(20);
  pdf.text('10', rightColumnX + 17.5, rightY + 25, { align: 'center' });
  
  // Initiative
  pdf.rect(rightColumnX + 40, rightY, 35, 35);
  pdf.setFontSize(8);
  pdf.text('INITIATIVE', rightColumnX + 57.5, rightY + 8, { align: 'center' });
  pdf.setFontSize(20);
  pdf.text('+0', rightColumnX + 57.5, rightY + 25, { align: 'center' });
  
  rightY += 40;
  
  // Speed
  pdf.rect(rightColumnX, rightY, 35, 35);
  pdf.setFontSize(8);
  pdf.text('SPEED', rightColumnX + 17.5, rightY + 8, { align: 'center' });
  pdf.setFontSize(20);
  pdf.text('30', rightColumnX + 17.5, rightY + 25, { align: 'center' });
  
  rightY += 50;
  
  // Hit Points
  drawField(rightColumnX, rightY, 75, 20, 'HIT POINT MAXIMUM');
  rightY += 25;
  drawField(rightColumnX, rightY, 75, 20, 'CURRENT HIT POINTS');
  rightY += 25;
  drawField(rightColumnX, rightY, 75, 20, 'TEMPORARY HIT POINTS');
  
  rightY += 35;
  
  // Hit Dice
  drawField(rightColumnX, rightY, 35, 20, 'HIT DICE');
  pdf.setFontSize(10);
  pdf.text('1d8', rightColumnX + 17.5, rightY + 12, { align: 'center' });
  
  // Death Saves
  pdf.rect(rightColumnX + 40, rightY, 35, 30);
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'bold');
  pdf.text('DEATH SAVES', rightColumnX + 57.5, rightY + 8, { align: 'center' });
  pdf.setFontSize(6);
  pdf.text('SUCCESSES', rightColumnX + 42, rightY + 15);
  pdf.text('○ ○ ○', rightColumnX + 67, rightY + 15);
  pdf.text('FAILURES', rightColumnX + 42, rightY + 25);
  pdf.text('○ ○ ○', rightColumnX + 67, rightY + 25);

  // Bottom section - Attacks & Equipment
  rightY += 45;
  
  // Attacks & Spellcasting
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ATTACKS & SPELLCASTING', leftColumnX, rightY);
  
  rightY += 10;
  
  // Attack table headers
  pdf.rect(leftColumnX, rightY, 60, 10);
  pdf.rect(leftColumnX + 60, rightY, 25, 10);
  pdf.rect(leftColumnX + 85, rightY, 40, 10);
  pdf.setFontSize(8);
  pdf.text('NAME', leftColumnX + 2, rightY + 7);
  pdf.text('ATK BONUS', leftColumnX + 62, rightY + 7);
  pdf.text('DAMAGE/TYPE', leftColumnX + 87, rightY + 7);
  
  // Attack rows
  for (let i = 0; i < 3; i++) {
    rightY += 10;
    pdf.rect(leftColumnX, rightY, 60, 15);
    pdf.rect(leftColumnX + 60, rightY, 25, 15);
    pdf.rect(leftColumnX + 85, rightY, 40, 15);
  }

  // Second Page
  pdf.addPage();
  
  yPos = 20;
  
  // Equipment
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EQUIPMENT', leftColumnX, yPos);
  
  yPos += 10;
  drawField(leftColumnX, yPos, 90, 100, 'OTHER PROFICIENCIES & LANGUAGES');
  
  // Features & Traits
  pdf.text('FEATURES & TRAITS', rightColumnX, yPos);
  drawField(rightColumnX, yPos, 90, 100, '');
  
  yPos += 110;
  
  // Additional sections
  drawField(leftColumnX, yPos, 90, 60, 'EQUIPMENT');
  drawField(rightColumnX, yPos, 90, 60, 'CHARACTER BACKSTORY');

  // Save PDF
  pdf.save(`ficha-${character.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};