/* eslint-disable camelcase */
/* eslint-disable semi */
/* eslint-disable quotes */
const breakpoints = [3840, 2560, 1920, 1024, 768, 360, 280]

const unsplashLink = (id, width, height) =>
  `https://ik.imagekit.io/k62/tr:w-${width}h-${height}/${id}`

const unsplashPhotos_SST = [
  { artist: 'sst', id: 'sst/001.webp', height: 100, width: 75 },
  { artist: 'sst', id: 'sst/002.webp', height: 100, width: 67 },
  { artist: 'sst', id: 'sst/003.webp', height: 100, width: 63 },
  { artist: 'sst', id: 'sst/004.webp', height: 100, width: 67 },
  { artist: 'sst', id: 'sst/005.webp', height: 100, width: 71 },
  { artist: 'sst', id: 'sst/006.webp', height: 100, width: 69 },
  { artist: 'sst', id: 'sst/007.webp', height: 100, width: 64 },
  { artist: 'sst', id: 'sst/008.webp', height: 100, width: 65 },
  { artist: 'sst', id: 'sst/009.webp', height: 100, width: 64 },
  { artist: 'sst', id: 'sst/010.webp', height: 100, width: 67 },
  { artist: 'sst', id: 'sst/011.webp', height: 100, width: 66 },
  { artist: 'sst', id: 'sst/012.webp', height: 100, width: 70 },
  { artist: 'sst', id: 'sst/013.webp', height: 100, width: 75 },
  { artist: 'sst', id: 'sst/014.webp', height: 100, width: 65 },
]
/*
 *
 */
const unsplashPhotos_UUR = [
  { artist: 'uur', id: 'uur/001.webp', width: 3192, height: 4256 },
  { artist: 'uur', id: 'uur/002.webp', width: 3336, height: 4448 },
  { artist: 'uur', id: 'uur/003.webp', width: 3042, height: 4056 },
  { artist: 'uur', id: 'uur/004.webp', width: 3432, height: 4576 },
  { artist: 'uur', id: 'uur/005.webp', width: 3456, height: 4608 },
  { artist: 'uur', id: 'uur/006.webp', width: 3090, height: 4120 },
  { artist: 'uur', id: 'uur/007.webp', width: 3267, height: 4356 },
  { artist: 'uur', id: 'uur/008.webp', width: 2995, height: 3993 },
  { artist: 'uur', id: 'uur/009.webp', width: 3141, height: 4188 },
  { artist: 'uur', id: 'uur/010.webp', width: 3378, height: 4504 },
  { artist: 'uur', id: 'uur/011.webp', width: 3342, height: 4456 },
  { artist: 'uur', id: 'uur/012.webp', width: 3330, height: 4440 },
  { artist: 'uur', id: 'uur/013.webp', width: 3294, height: 4392 },
  { artist: 'uur', id: 'uur/014.webp', width: 3456, height: 4608 },
  { artist: 'uur', id: 'uur/015.webp', width: 2754, height: 3672 },
  { artist: 'uur', id: 'uur/016.webp', width: 3234, height: 4312 },
  { artist: 'uur', id: 'uur/017.webp', width: 3137, height: 4182 },
  { artist: 'uur', id: 'uur/018.webp', width: 3270, height: 4360 },
  { artist: 'uur', id: 'uur/019.webp', width: 3353, height: 4470 },
  { artist: 'uur', id: 'uur/020.webp', width: 2982, height: 3976 },
  { artist: 'uur', id: 'uur/021.webp', width: 3020, height: 4026 },
  { artist: 'uur', id: 'uur/022.webp', width: 2993, height: 3990 },
  { artist: 'uur', id: 'uur/023.webp', width: 2694, height: 3592 },
  { artist: 'uur', id: 'uur/024.webp', width: 3043, height: 4057 },
  { artist: 'uur', id: 'uur/025.webp', width: 2862, height: 3816 },
  { artist: 'uur', id: 'uur/026.webp', width: 2980, height: 3973 },
  { artist: 'uur', id: 'uur/027.webp', width: 3249, height: 4332 },
  { artist: 'uur', id: 'uur/028.webp', width: 3096, height: 4128 },
  { artist: 'uur', id: 'uur/029.webp', width: 3324, height: 4432 },
  { artist: 'uur', id: 'uur/030.webp', width: 3052, height: 4069 },
]
/*
 *
 */
const unsplashPhotos_CBE = [
  { artist: 'cbr', id: 'cbe/001.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/002.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/003.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/004.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/005.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/006.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/007.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/008.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/009.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/010.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/011.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/012.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/013.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/014.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/015.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/016.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/017.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/018.webp', width: 768, height: 1024 },
  { artist: 'cbr', id: 'cbe/019.webp', width: 768, height: 1024 },
  { artist: 'cbr', id: 'cbe/020.webp', width: 768, height: 1024 },
  { artist: 'cbr', id: 'cbe/021.webp', width: 768, height: 1024 },
]

/* const unsplashPhotos = [
  { artist: 'sst', id: 'sst/001.webp', height: 100, width: 75 },
  { artist: 'sst', id: 'sst/002.webp', height: 100, width: 67 },
  { artist: 'sst', id: 'sst/003.webp', height: 100, width: 63 },
  { artist: 'sst', id: 'sst/004.webp', height: 100, width: 67 },
  { artist: 'sst', id: 'sst/005.webp', height: 100, width: 71 },
  { artist: 'sst', id: 'sst/006.webp', height: 100, width: 69 },
  { artist: 'sst', id: 'sst/007.webp', height: 100, width: 64 },
  { artist: 'sst', id: 'sst/008.webp', height: 100, width: 65 },
  { artist: 'sst', id: 'sst/009.webp', height: 100, width: 64 },
  { artist: 'sst', id: 'sst/010.webp', height: 100, width: 67 },
  { artist: 'sst', id: 'sst/011.webp', height: 100, width: 66 },
  { artist: 'sst', id: 'sst/012.webp', height: 100, width: 70 },
  { artist: 'sst', id: 'sst/013.webp', height: 100, width: 75 },
  { artist: 'sst', id: 'sst/014.webp', height: 100, width: 65 },

  { artist: 'uur', id: 'uur/001.webp', width: 3192, height: 4256 },
  { artist: 'uur', id: 'uur/002.webp', width: 3336, height: 4448 },
  { artist: 'uur', id: 'uur/003.webp', width: 3042, height: 4056 },
  { artist: 'uur', id: 'uur/004.webp', width: 3432, height: 4576 },
  { artist: 'uur', id: 'uur/005.webp', width: 3456, height: 4608 },
  { artist: 'uur', id: 'uur/006.webp', width: 3090, height: 4120 },
  { artist: 'uur', id: 'uur/007.webp', width: 3267, height: 4356 },
  { artist: 'uur', id: 'uur/008.webp', width: 2995, height: 3993 },
  { artist: 'uur', id: 'uur/009.webp', width: 3141, height: 4188 },
  { artist: 'uur', id: 'uur/010.webp', width: 3378, height: 4504 },
  { artist: 'uur', id: 'uur/011.webp', width: 3342, height: 4456 },
  { artist: 'uur', id: 'uur/012.webp', width: 3330, height: 4440 },
  { artist: 'uur', id: 'uur/013.webp', width: 3294, height: 4392 },
  { artist: 'uur', id: 'uur/014.webp', width: 3456, height: 4608 },
  { artist: 'uur', id: 'uur/015.webp', width: 2754, height: 3672 },
  { artist: 'uur', id: 'uur/016.webp', width: 3234, height: 4312 },
  { artist: 'uur', id: 'uur/017.webp', width: 3137, height: 4182 },
  { artist: 'uur', id: 'uur/018.webp', width: 3270, height: 4360 },
  { artist: 'uur', id: 'uur/019.webp', width: 3353, height: 4470 },
  { artist: 'uur', id: 'uur/020.webp', width: 2982, height: 3976 },
  { artist: 'uur', id: 'uur/021.webp', width: 3020, height: 4026 },
  { artist: 'uur', id: 'uur/022.webp', width: 2993, height: 3990 },
  { artist: 'uur', id: 'uur/023.webp', width: 2694, height: 3592 },
  { artist: 'uur', id: 'uur/024.webp', width: 3043, height: 4057 },
  { artist: 'uur', id: 'uur/025.webp', width: 2862, height: 3816 },
  { artist: 'uur', id: 'uur/026.webp', width: 2980, height: 3973 },
  { artist: 'uur', id: 'uur/027.webp', width: 3249, height: 4332 },
  { artist: 'uur', id: 'uur/028.webp', width: 3096, height: 4128 },
  { artist: 'uur', id: 'uur/029.webp', width: 3324, height: 4432 },
  { artist: 'uur', id: 'uur/030.webp', width: 3052, height: 4069 },

  { artist: 'cbr', id: 'cbe/001.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/002.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/003.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/004.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/005.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/006.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/007.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/008.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/009.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/010.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/011.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/012.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/013.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/014.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/015.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/016.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/017.webp', width: 1024, height: 1024 },
  { artist: 'cbr', id: 'cbe/018.webp', width: 768, height: 1024 },
  { artist: 'cbr', id: 'cbe/019.webp', width: 768, height: 1024 },
  { artist: 'cbr', id: 'cbe/020.webp', width: 768, height: 1024 },
  { artist: 'cbr', id: 'cbe/021.webp', width: 768, height: 1024 },
]; 

const photos = unsplashPhotos.map((photo, index) => {
    const width = photo.width * 4
    const height = photo.height * 4
    const artistId = photo.artist
    return {
        src: unsplashLink(photo.id, width, height),
        key: `${index}`,
        width,
        height,
        artistId,
        images: breakpoints.map((breakpoint) => {
            const breakpointHeight = Math.round((height / width) * breakpoint)
            return {
                src: unsplashLink(photo.id, breakpoint, breakpointHeight),
                width: breakpoint,
                height: breakpointHeight,
            }
        }),
    }
}) */

const photos_UUR = unsplashPhotos_UUR.map((photo, index) => {
  const width = photo.width * 4
  const height = photo.height * 4
  const artistId = photo.artist
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    artistId,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint)
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      }
    }),
  }
})

const photos_SST = unsplashPhotos_SST.map((photo, index) => {
  const width = photo.width * 4
  const height = photo.height * 4
  const artistId = photo.artist
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    artistId,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint)
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      }
    }),
  }
})

const photos_CBE = unsplashPhotos_CBE.map((photo, index) => {
  const width = photo.width * 4
  const height = photo.height * 4
  const artistId = photo.artist
  return {
    src: unsplashLink(photo.id, width, height),
    key: `${index}`,
    width,
    height,
    artistId,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint)
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      }
    }),
  }
})

export { photos_UUR, photos_SST, photos_CBE }
