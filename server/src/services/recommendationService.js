export function getRecommendations(record) {
  if (!record) return ['No data available'];

  const recommendations = ['Maintain regular prenatal checkups'];
  if (record.glucose > 140) recommendations.push('Review nutrition and glucose monitoring plan');
  if (record.hemoglobin < 11) recommendations.push('Discuss iron supplementation with doctor');
  return recommendations;
}
