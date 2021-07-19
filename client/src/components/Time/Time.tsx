interface Props {
  day: Date;
}

const Time = ({ day }: Props): JSX.Element => {
  console.log(day);
  return <h1>day</h1>;
};

export default Time;
