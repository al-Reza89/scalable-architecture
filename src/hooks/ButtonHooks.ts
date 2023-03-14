interface Action {
  type: string;
}

interface State {
  previewButton: boolean;
  codeButton: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ACTIVE_PREVIEW':
      return {
        ...state,
        previewButton: true,
        codeButton: false,
      };
    case 'ACTIVE_CODE':
      return {
        ...state,
        previewButton: false,
        codeButton: true,
      };
    default:
      return state;
  }
};

export default reducer;
