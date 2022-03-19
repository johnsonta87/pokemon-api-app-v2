export default function updateDashboardAction(state, payload) {
  return {
    ...state,
    dashboard: {
      ...state.dashboard,
      ...payload,
    },
  };
}
