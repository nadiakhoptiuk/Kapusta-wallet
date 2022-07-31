export const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    padding: 5,
  }),

  control: (_, { selectProps: { width } }) => ({
    display: 'flex',
    height: '44px',
    fontSize: '12px',
    lineHeight: '14px',
    paddingLeft: '19px',
    color: 'var(--general-text-color)',
  }),

  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: '#C7CCDC',
      margin: 0,
    };
  },
  indicatorSeparator: styles => ({ display: 'none' }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
