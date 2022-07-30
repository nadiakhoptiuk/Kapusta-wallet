export const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    padding: 5,
  }),

  control: (_, { selectProps: { width } }) => ({
    width: '169px',
    display: 'flex',
    height: '44px',
    border: '2px solid var(--modal-button-border-color)',
    fontFamily: 'Roboto',
    fontWeight: 400,
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

export const customStylesMobile = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    padding: 5,
  }),

  control: (_, { selectProps: { width } }) => ({
    display: 'flex',
    width: '280px',
    height: '44px',
    border: '2px solid #fff',
    fontFamily: 'Roboto',
    fontSize: '12px',
    lineHeight: '14px',
    color: 'var(--general-text-color)',
    textAlign: 'start',
    borderBottomRightRadius: '16px',
    backgroundColor: 'transparent',
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
