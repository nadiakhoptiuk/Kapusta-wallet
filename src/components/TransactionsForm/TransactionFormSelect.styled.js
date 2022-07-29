import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  @media screen and (max-width: 767px) {
    .css-1s2u09g-control {
      width: 280px;
      height: 44px;
      border: 2px solid #fff;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      border-bottom-right-radius: 16px;
      background-color: transparent;

      color: var(--general-text-color);
    }
    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-319lph-ValueContainer {
      color: #3c3d3e;
      height: 44px;
      width: 240px;
      order: 2px solid #f5f6fb;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
    .css-1s2u09g-control {
      width: 184px;
      height: 44px;
      border: 2px solid var(--modal-button-border-color);
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 14px;
      padding-left: 19px;

      color: var(--general-text-color);
    }
    .Select__control:hover {
      border-color: #a1a1a1;
    }

    .Select__control--is-focused {
      box-shadow: 0 0 0 1px black;
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-319lph-ValueContainer {
      color: #3c3d3e;
      height: 44px;
      width: 147px;
      order: 2px solid var(--modal-button-border-color);
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1280px) {
    .css-1s2u09g-control {
      width: 169px;
      height: 44px;
      border: 2px solid var(--modal-button-border-color);
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 14px;
      padding-left: 19px;

      color: var(--general-text-color);
    }
    .Select__control:hover {
      border-color: #a1a1a1;
    }

    .Select__control--is-focused {
      box-shadow: 0 0 0 1px black;
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-319lph-ValueContainer {
      color: #3c3d3e;
      height: 44px;
      width: 135px;
      order: 2px solid var(--modal-button-border-color);
      cursor: pointer;
    }
  }
`;

export default StyledSelect;
