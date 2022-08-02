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
  }),

  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: 'var(--trans-form-input-placeholder-color)',
      margin: 0,
    };
  },
  indicatorSeparator: styles => ({ display: 'none' }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = 'var(--table-description-text-color)';

    return { ...provided, opacity, transition, color };
  },
};
