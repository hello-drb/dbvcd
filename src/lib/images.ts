// CENTRAL IMAGE CONFIGURATION
// All images served from Drew's Cloudinary account (diduw1fmf)

const CLOUD = "https://res.cloudinary.com/diduw1fmf/image/upload";

// Helper for Cloudinary transforms
function img(transforms: string, path: string) {
  return `${CLOUD}/${transforms}/${path}`;
}

export const IMAGES = {
  // HERO + PORTRAIT — SRM photo of Drew
  HERO_BG: img("f_auto,q_auto,w_1920", "v1772570367/IMG_7292_awutou.jpg"),
  HERO_BG_MOBILE: img("f_auto,q_auto,w_800", "v1772570367/IMG_7292_awutou.jpg"),

  // SELECTED WORK — Client portfolio images
  NICOLE_ZURAITIS: img("f_auto,q_auto,w_800,h_1000,c_fill,g_face", "v1768544915/nicole_z_jcf6o2.png"),
  JESSIE_WAGNER: img("f_auto,q_auto,w_800,h_1000,c_fill,g_face", "v1768403981/jessie1_p2gbvd.png"),
  ROMINA_GARBER: img("f_auto,q_auto,w_800,h_1000,c_fill,g_face", "v1768543350/romina_russell_gk2ez4.png"),
  TALEA_ENSEMBLE: img("f_auto,q_auto,w_800,h_1000,c_fill,g_face", "v1768407508/talea_group_uwwomc.png"),
  CASEY_BALTES: img("f_auto,q_auto,w_800,h_1000,c_fill,g_face", "v1768418364/CASEY_1_wq0vo5.jpg"),

  // AMBIENT / ADDITIONAL PORTFOLIO
  CYRILLE: img("f_auto,q_auto,w_600", "v1768230293/Cyrille_Green_ug4lzg.png"),
  KATIE_JACOBY: img("f_auto,q_auto,w_600", "v1768231551/katie_jacoby_dress_cxexe9.png"),
  JAZZMEIA: img("f_auto,q_auto,w_1200", "v1768230325/jazzmeia_wide_ieefeg.png"),
  MONIFAH: img("f_auto,q_auto,w_600", "v1768541914/A7409419__2_1_onzvjc.jpg"),
  SASHA_ONO: img("f_auto,q_auto,w_600", "v1768544588/7P3A1846_yhoktk.jpg"),

  // TESTIMONIAL AVATARS
  SOPHIE: img("f_auto,q_auto,w_120,h_120,c_fill,g_face", "v1768343797/sophie_nw70nf.jpg"),
  TAYLOR: img("f_auto,q_auto,w_120,h_120,c_fill,g_face", "v1768343880/tayzaro_k37gnw.jpg"),
  GRACIE: img("f_auto,q_auto,w_120,h_120,c_fill,g_face", "v1768345207/gracie_f5rija.png"),
  ALECIA: img("f_auto,q_auto,w_120,h_120,c_fill,g_face", "v1768343842/alecia_ndmsxd.jpg"),

  // PRESS LOGOS
  VOGUE: img("f_auto,q_auto,h_28", "v1768346275/VOGUE_LOGO.svg_twrtry.webp"),
  BILLBOARD: img("f_auto,q_auto,h_28", "v1768347351/Billboard_logo_v3_mvlmwp.png"),
  DOWNBEAT: img("f_auto,q_auto,h_28", "v1768346270/Down_Beat_iv9rrl.webp"),
  AMERICAN_SONGWRITER: img("f_auto,q_auto,h_28", "v1768355800/americansong_rajff0.webp"),

  // ALBUM ART
  IMPULSE_INSTINCT: img("f_auto,q_auto,w_300", "v1769320153/impulseInstinctcover_zpkz6x.jpg"),
  LOST_AND_FOUND: img("f_auto,q_auto,w_300", "v1769329708/lostandfoundcover_orff3l.png"),

  // ABOUT — SRM portrait
  ABOUT_PORTRAIT: img("f_auto,q_auto,w_600,h_750,c_fill,g_face", "v1772570367/IMG_7292_awutou.jpg"),
};
