
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
  
  // Colors and styling
  const darkGray = '#4a4a4a';
  const lightGray = '#f5f5f5';
  
  // Helper function to draw a box
  const drawBox = (x: number, y: number, width: number, height: number, label?: string) => {
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.5);
    pdf.rect(x, y, width, height);
    
    if (label) {
      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      pdf.text(label, x + 2, y + height - 2);
    }
  };

  // Header Section
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 0, 0);
  pdf.text('D&D 5e CHARACTER SHEET', pageWidth / 2, 15, { align: 'center' });

  // Character Basic Info Section
  let yPos = 25;
  
  // Name, Class & Level, Race & Background, Player Name, Alignment, Experience Points
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  
  // First row
  drawBox(10, yPos, 60, 12, 'CHARACTER NAME');
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text(character.name, 12, yPos + 8);
  
  drawBox(75, yPos, 40, 12, 'CLASS & LEVEL');
  pdf.text(`${character.class} ${character.level}`, 77, yPos + 8);
  
  drawBox(120, yPos, 35, 12, 'BACKGROUND');
  
  drawBox(160, yPos, 35, 12, 'PLAYER NAME');
  
  yPos += 15;
  
  // Second row
  drawBox(10, yPos, 40, 12, 'RACE');
  pdf.text(character.race, 12, yPos + 8);
  
  drawBox(55, yPos, 40, 12, 'ALIGNMENT');
  
  drawBox(100, yPos, 50, 12, 'EXPERIENCE POINTS');
  
  drawBox(155, yPos, 40, 12, 'INSPIRATION');
  
  yPos += 20;

  // Stats Section (Left Column)
  const statsX = 10;
  let statsY = yPos;
  
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ABILITY SCORES', statsX + 15, statsY);
  
  const abilities = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];
  
  statsY += 10;
  
  abilities.forEach((ability, index) => {
    const boxY = statsY + (index * 25);
    
    // Main ability box
    drawBox(statsX, boxY, 50, 20);
    
    // Ability name
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'bold');
    pdf.text(ability, statsX + 25, boxY + 3, { align: 'center' });
    
    // Score box
    pdf.setFontSize(20);
    pdf.text('10', statsX + 25, boxY + 14, { align: 'center' });
    
    // Modifier box
    drawBox(statsX + 15, boxY + 22, 20, 8);
    pdf.setFontSize(10);
    pdf.text('+0', statsX + 25, boxY + 28, { align: 'center' });
  });

  // Skills Section (Center)
  const skillsX = 70;
  let skillsY = yPos + 10;
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('SKILLS', skillsX, skillsY);
  
  const skills = [
    'Acrobatics (Dex)', 'Animal Handling (Wis)', 'Arcana (Int)', 'Athletics (Str)',
    'Deception (Cha)', 'History (Int)', 'Insight (Wis)', 'Intimidation (Cha)',
    'Investigation (Int)', 'Medicine (Wis)', 'Nature (Int)', 'Perception (Wis)',
    'Performance (Cha)', 'Persuasion (Cha)', 'Religion (Int)', 'Sleight of Hand (Dex)',
    'Stealth (Dex)', 'Survival (Wis)'
  ];
  
  skillsY += 5;
  
  skills.forEach((skill, index) => {
    const y = skillsY + (index * 8);
    
    // Proficiency circle
    pdf.circle(skillsX + 3, y + 2, 2);
    
    // Modifier box
    drawBox(skillsX + 8, y, 12, 6);
    pdf.setFontSize(8);
    pdf.text('+0', skillsX + 14, y + 4, { align: 'center' });
    
    // Skill name
    pdf.setFont('helvetica', 'normal');
    pdf.text(skill, skillsX + 25, y + 4);
  });

  // Combat Stats (Right Column)
  const combatX = 140;
  let combatY = yPos + 10;
  
  // Armor Class
  drawBox(combatX, combatY, 25, 25);
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ARMOR', combatX + 12.5, combatY + 4, { align: 'center' });
  pdf.text('CLASS', combatX + 12.5, combatY + 8, { align: 'center' });
  pdf.setFontSize(16);
  pdf.text('10', combatX + 12.5, combatY + 18, { align: 'center' });
  
  // Initiative
  drawBox(combatX + 30, combatY, 25, 25);
  pdf.setFontSize(8);
  pdf.text('INITIATIVE', combatX + 42.5, combatY + 6, { align: 'center' });
  pdf.setFontSize(16);
  pdf.text('+0', combatX + 42.5, combatY + 18, { align: 'center' });
  
  combatY += 30;
  
  // Speed
  drawBox(combatX, combatY, 25, 25);
  pdf.setFontSize(8);
  pdf.text('SPEED', combatX + 12.5, combatY + 6, { align: 'center' });
  pdf.setFontSize(16);
  pdf.text('30', combatX + 12.5, combatY + 18, { align: 'center' });
  
  combatY += 30;
  
  // Hit Points
  drawBox(combatX, combatY, 55, 15);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('HIT POINT MAXIMUM', combatX + 27.5, combatY + 5, { align: 'center' });
  pdf.setFontSize(14);
  pdf.text('8', combatX + 27.5, combatY + 12, { align: 'center' });
  
  combatY += 20;
  
  drawBox(combatX, combatY, 55, 15);
  pdf.setFontSize(10);
  pdf.text('CURRENT HIT POINTS', combatX + 27.5, combatY + 5, { align: 'center' });
  
  combatY += 20;
  
  drawBox(combatX, combatY, 55, 15);
  pdf.setFontSize(10);
  pdf.text('TEMPORARY HIT POINTS', combatX + 27.5, combatY + 5, { align: 'center' });
  
  combatY += 25;
  
  // Hit Dice & Death Saves
  drawBox(combatX, combatY, 25, 20);
  pdf.setFontSize(8);
  pdf.text('HIT DICE', combatX + 12.5, combatY + 4, { align: 'center' });
  pdf.text('TOTAL', combatX + 12.5, combatY + 8, { align: 'center' });
  pdf.setFontSize(10);
  pdf.text(`1d8`, combatX + 12.5, combatY + 15, { align: 'center' });
  
  drawBox(combatX + 30, combatY, 25, 20);
  pdf.setFontSize(8);
  pdf.text('DEATH SAVES', combatX + 42.5, combatY + 4, { align: 'center' });
  pdf.setFontSize(6);
  pdf.text('SUCCESSES', combatX + 32, combatY + 10);
  pdf.text('○ ○ ○', combatX + 47, combatY + 10);
  pdf.text('FAILURES', combatX + 33, combatY + 16);
  pdf.text('○ ○ ○', combatX + 47, combatY + 16);

  // Second Page for additional content
  pdf.addPage();
  
  // Attacks & Spellcasting
  yPos = 20;
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ATTACKS & SPELLCASTING', 10, yPos);
  
  // Attack table headers
  yPos += 10;
  drawBox(10, yPos, 50, 8);
  pdf.setFontSize(8);
  pdf.text('NAME', 12, yPos + 6);
  
  drawBox(60, yPos, 20, 8);
  pdf.text('ATK BONUS', 62, yPos + 6);
  
  drawBox(80, yPos, 30, 8);
  pdf.text('DAMAGE/TYPE', 82, yPos + 6);
  
  // Attack rows
  for (let i = 0; i < 3; i++) {
    yPos += 8;
    drawBox(10, yPos, 50, 12);
    drawBox(60, yPos, 20, 12);
    drawBox(80, yPos, 30, 12);
  }
  
  yPos += 20;
  
  // Equipment Section
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EQUIPMENT', 10, yPos);
  
  yPos += 10;
  drawBox(10, yPos, 90, 80);
  
  // Features & Traits
  pdf.text('FEATURES & TRAITS', 110, yPos);
  drawBox(110, yPos + 5, 90, 80);
  
  yPos += 90;
  
  // Proficiencies & Languages
  pdf.text('OTHER PROFICIENCIES & LANGUAGES', 10, yPos);
  drawBox(10, yPos + 5, 90, 40);
  
  // Additional Notes
  pdf.text('ADDITIONAL NOTES', 110, yPos);
  drawBox(110, yPos + 5, 90, 40);

  // Save PDF
  pdf.save(`ficha-${character.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};
