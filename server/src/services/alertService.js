export function buildAlertsFromRisk(riskLevel) {
  if (riskLevel === 'high') return ['Immediate clinical review required'];
  if (riskLevel === 'medium') return ['Schedule check-in within 48 hours'];
  return ['Continue routine monitoring'];
}
