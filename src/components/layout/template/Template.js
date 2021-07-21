import './template.scss';
import useStore from './../../../store/store';

const Template = () => {
  const isTemplateReverse = useStore((state) => state.isTemplateReverse);

  return (
    <div id="template" className={isTemplateReverse ? 'reverse' : ''}>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="right"></div>
      <div className="left"></div>
    </div>
  );
};

export default Template;
