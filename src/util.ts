
export function getColor(percent: number) {
  const percentColors = [
    { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
    { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
    { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];
  let i;
  for (i = 1; i < percentColors.length - 1; i++) {
    if (percent < percentColors[i].pct) {
      break;
    }
  }
  let lower = percentColors[i - 1];
  let upper = percentColors[i];
  let range = upper.pct - lower.pct;
  let rangePct = (percent - lower.pct) / range;
  let pctLower = 1 - rangePct;
  let pctUpper = rangePct;
  let color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
// or output as hex if pr
}


export const questions = {
  navigation: "How confident did you feel navigating during the test? Why did you feel that confident?",
  cart: "How confident do you feel about what's in your cart? Why do you feel that confident?",
  instructions: "How useful did you find the instructions provided in How to Sync Your Lights? Why/why not?",
  materials: "What materials did you add to your cart?",
  feedback: "What general feedback do you have?",
  diy: "Would you use the DIY section of Home Depot for your own applications/projects? Why/why not?",
  satisfaction: "Please rate how satisfied were you with your experience. (1-5)"
}