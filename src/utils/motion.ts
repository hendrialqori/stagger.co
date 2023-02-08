import { Variants } from "framer-motion";

export const bodyContentVariants: Variants = {
  show: (expands: boolean) => ({
    x: expands ? -200 : 0,
    transition: {
      type: "tween",
    },
  }),
};

export const navbarVariants:Variants = {
  hidden: {
    opacity: 0,
    top: -50,
    transition : {
      duration: 0.5
    }
  },
  show: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};

export const hamburgerVariants: Variants = {
  hidden: { opacity: 0 },
  show:  {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
      staggerChildren: 2,
    },
  },
}

export const textHeadingVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const typingVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.04,
    },
  },
};

export const letterVarians: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};


export const framerworkVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: index % 2 === 0 ? 20 : -20,
    x : index % 2 === 0 ? 20 : -20,
  }),
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type:'tween',
      delay: 1,
      duration: 1
    }
  })
}

export const twitterCardVariants: Variants = {
  hidden: (index: number) =>  ({
    opacity: 0,
    y: index * -10,
  }),
  show: (index: number) => ({
    opacity: 1,
    y: index % 2 === 0 ? 10 : 0,
    transition: {
      duration: index * 0.6,
      type: "tween"
    }
  })
}

export const websiteCardVariants: Variants = {
  hidden:  {
    opacity: 0,
  },
  show: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      type: "tween"
    }
  })
}