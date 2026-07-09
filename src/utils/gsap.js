import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// SplitText is loaded via <script> tag in index.html (UMD format)
// to avoid ESM strict mode breaking the UMD's `this === window` assumption.
const SplitText = window.SplitText;

gsap.registerPlugin(ScrollTrigger);
if (SplitText) {
  gsap.registerPlugin(SplitText);
}

export { gsap, ScrollTrigger, SplitText };
