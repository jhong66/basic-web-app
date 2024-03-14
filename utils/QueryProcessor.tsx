export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "joyceh"
    );
  }

  else if (query.toLowerCase().includes("what is your name")) {
    return (
      "Joyce"
    );
  }

  else if (query.toLowerCase().includes("plus")) {
    const split = query.slice(0, -1).split(" ");
    return (
      (+split[2] + +split[4]).toString()
    );
  }

  else if (query.toLowerCase().includes("largest")) {
    const split = query.slice(0, -1).split(" ");
    return (
      Math.max(+split[8].slice(0, -1), +split[9].slice(0, -1), +split[10]).toString()
    );
  }

  return "";
}
