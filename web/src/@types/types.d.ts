interface IPropsComment {
  name: string;
  description?: string | '';
}

interface IPropsForm {
  onAddCommnet(): void;
}

interface IComment {
  id: string;
  name: string;
  content?: string;
}
