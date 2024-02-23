type Params = {
  publicId: string;
  w: number;
  h: number;
  quality?: number;
  blurryLoader?: {
    w?: number;
    h?: number;
    blur?: number;
  };
};

export const getCloudinaryUrl = ({
  publicId,
  w,
  h,
  quality = 80,
  blurryLoader = {},
}: Params) => {
  const { w: blurryW = 30, h: blurryH = 30, blur = 1000 } = blurryLoader;
  return {
    // Blurry version used for progressive loading
    src: `https://res.cloudinary.com/dfjcoifwd/image/upload/w_${blurryW},h_${blurryH},c_scale,e_blur:${blur},f_auto/v1/${publicId}`,
    // Final version
    dataSrc: `https://res.cloudinary.com/dfjcoifwd/image/upload/f_auto,q_${quality},dpr_auto,w_${w},h_${h},c_fill/fl_progressive/v1/${publicId}`,
  };
};
