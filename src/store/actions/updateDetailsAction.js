export default function updateDetailsAction(state, payload) {
  return {
    ...state,
    details: {
      ...state.details,
      ...payload,
    },
  };
}
