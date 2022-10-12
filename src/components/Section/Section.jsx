import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <h2>{title}</h2>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
