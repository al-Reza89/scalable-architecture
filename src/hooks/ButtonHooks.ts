interface Action {
  type: string;
}

export const initialState = {
  previewButton: true,
  codeButton: false,
  rawCodeButton: false,
  rawCssButton: false,
};

interface State {
  previewButton: boolean;
  codeButton: boolean;
  rawCodeButton: boolean;
  rawCssButton: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ACTIVE_PREVIEW':
      return {
        previewButton: true,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: false,
      };
    case 'ACTIVE_CODE':
      return {
        previewButton: false,
        codeButton: true,
        rawCodeButton: false,
        rawCssButton: false,
      };

    case 'ACTIVE_RAW_CODE':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: true,
        rawCssButton: false,
      };

    case 'ACTIVE_RAW_CSS':
      return {
        previewButton: false,
        codeButton: false,
        rawCodeButton: false,
        rawCssButton: true,
      };
    default:
      return state;
  }
};

export default reducer;
