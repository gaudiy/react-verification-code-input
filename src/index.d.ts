export interface ReactCodeInputProps {
  type?: 'text' | 'number';
  onChange?: (val: string) => void;
  onComplete?: (val: string) => void;
  fields?: number;
  autoFocus?: boolean;
  className?: string;
  values?: string[];
  disabled?: boolean;
  required?: boolean;
  placeholder?: string[];
  fieldClassName?: string;
}

declare class ReactCodeInput extends React.Component<ReactCodeInputProps> {
  __clearvalues__: () => void;
}

export default ReactCodeInput;
