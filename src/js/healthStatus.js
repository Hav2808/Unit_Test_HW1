export default function getHealthStatus(character) {
    if (character.health > 50) {
        return 'healthy';
      } else if (character.health <= 50 && character.health >= 15) {
        return 'wounded';
      } else {
        return 'critical';
      }
    }

export function sortByHealt(character) {
  return [...character].sort((a, b) => b.health - a.health);
  }
  