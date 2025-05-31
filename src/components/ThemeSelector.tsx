
import React from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeSelector: React.FC = () => {
  const { color, mode, setColor, setMode, getAccentColor, getBackgroundColor, getCardColor, getTextColor } = useTheme();

  const colors = [
    { name: 'blue', label: 'Azul', bgClass: 'bg-blue-500' },
    { name: 'green', label: 'Verde', bgClass: 'bg-green-500' },
    { name: 'cyan', label: 'Ciano', bgClass: 'bg-cyan-500' },
    { name: 'red', label: 'Vermelho', bgClass: 'bg-red-500' },
    { name: 'purple', label: 'Roxo', bgClass: 'bg-purple-500' },
  ] as const;

  return (
    <div className={`${getCardColor()} p-4 rounded-lg border ${mode === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="flex items-center gap-2 mb-4">
        <Palette size={20} className={getAccentColor()} />
        <h3 className={`font-semibold ${getTextColor()}`}>Personalização</h3>
      </div>
      
      {/* Color Selection */}
      <div className="mb-4">
        <label className={`block text-sm font-medium mb-2 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Cor dos Detalhes
        </label>
        <div className="flex gap-2 flex-wrap">
          {colors.map((colorOption) => (
            <button
              key={colorOption.name}
              onClick={() => setColor(colorOption.name)}
              className={`w-8 h-8 rounded-full ${colorOption.bgClass} border-2 transition-all ${
                color === colorOption.name 
                  ? 'border-white shadow-lg scale-110' 
                  : 'border-gray-400 hover:scale-105'
              }`}
              title={colorOption.label}
            />
          ))}
        </div>
      </div>

      {/* Mode Selection */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Modo
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('dark')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
              mode === 'dark'
                ? `bg-gray-800 border-gray-600 ${getTextColor()}`
                : `bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300`
            }`}
          >
            <Moon size={16} />
            <span className="text-sm">Escuro</span>
          </button>
          <button
            onClick={() => setMode('light')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
              mode === 'light'
                ? `bg-white border-gray-300 text-gray-900`
                : `bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700`
            }`}
          >
            <Sun size={16} />
            <span className="text-sm">Claro</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
