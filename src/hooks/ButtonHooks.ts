interface Action {
  type: string;
}

export const initialState = {
  previewButton: true,
  codeButton: false,
  rawCodeButton: false,
  rawCssButton: false,
  component1Button: false,
  component2Button: false,
  metaDataButton: false,
};

interface State {
  previewButton: boolean;
  codeButton: boolean;
  rawCodeButton: boolean;
  rawCssButton: boolean;
  component1Button?: boolean;
  component2Button?: boolean;
  metaDataButton?: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ACTIVE_PREVIEW':
      return {
        previewButton: true,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: false,
        component1Button: false,
        component2Button: false,
        metaDataButton: false,
      };
    case 'ACTIVE_CODE':
      return {
        previewButton: false,
        codeButton: true,
        rawCodeButton: false,
        rawCssButton: false,
        component1Button: false,
        component2Button: false,
        metaDataButton: false,
      };

    case 'ACTIVE_RAW_CODE':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: true,
        rawCssButton: false,
        component1Button: false,
        component2Button: false,
        metaDataButton: false,
      };

    case 'ACTIVE_RAW_CSS':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: true,
        component1Button: false,
        component2Button: false,
        metaDataButton: false,
      };

    case 'ACTIVE_COMPONENT1':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: false,
        component1Button: true,
        component2Button: false,
        metaDataButton: false,
      };

    case 'ACTIVE_COMPONENT2':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: false,
        component1Button: false,
        component2Button: true,
        metaDataButton: false,
      };

    case 'META_DATA':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: false,
        component1Button: false,
        component2Button: false,
        metaDataButton: true,
      };
    default:
      return state;
  }
};

export default reducer;
