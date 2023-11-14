type LabelProps = {
  htmlFor: string;
  name: string;
};

const FormLabel = ({ htmlFor, name }: LabelProps) => {
  return <label htmlFor={htmlFor}>{name}:</label>;
};
export default FormLabel;
