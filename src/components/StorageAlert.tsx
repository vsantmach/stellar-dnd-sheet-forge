
import React from 'react';
import { AlertTriangle, FileText, Trash2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';
import { getStorageUsage } from '../hooks/useLocalStorage';
import { generateCharacterPDF } from '../utils/pdfGenerator';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

interface StorageAlertProps {
  characters: Character[];
  onClearStorage: () => void;
}

const StorageAlert: React.FC<StorageAlertProps> = ({ characters, onClearStorage }) => {
  const { percentage } = getStorageUsage();
  
  if (percentage < 80) {
    return null;
  }

  const handleExportAllPDFs = () => {
    characters.forEach(character => {
      generateCharacterPDF(character);
    });
  };

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Armazenamento Quase Cheio</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-3">
          O armazenamento local está {percentage.toFixed(1)}% cheio. 
          Considere fazer backup dos seus personagens ou limpar dados antigos.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={handleExportAllPDFs}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <FileText size={16} />
            Exportar Todos PDFs
          </Button>
          <Button
            onClick={onClearStorage}
            variant="destructive"
            size="sm"
            className="flex items-center gap-2"
          >
            <Trash2 size={16} />
            Limpar Armazenamento
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default StorageAlert;
