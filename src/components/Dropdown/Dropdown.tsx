import React from 'react';

export interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  disabled?: boolean;
  label?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  disabled = false,
  label,
}) => (
  <div>
    {label && <label>{label}</label>}
    <select
      onChange={e => onSelect(e.target.value)}
      disabled={disabled}
      data-testid="dropdown"
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
          </option>
        ))}
      </select>
        </div>
    );