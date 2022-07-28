/* eslint-disable camelcase */
import { photos_UUR, photos_SST, photos_CBE } from './photos'

const slides_UUR = photos_UUR.map(
  ({ artistId, src, key, width, height, images }) => ({
    src,
    key,
    artistId,
    aspectRatio: width / height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
    })),
  })
)

const slides_SST = photos_SST.map(
  ({ artistId, src, key, width, height, images }) => ({
    src,
    key,
    artistId,
    aspectRatio: width / height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
    })),
  })
)

const slides_CBE = photos_CBE.map(
  ({ artistId, src, key, width, height, images }) => ({
    src,
    key,
    artistId,
    aspectRatio: width / height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
    })),
  })
)

console.table(slides_SST, slides_UUR, slides_CBE)

export { slides_UUR, slides_SST, slides_CBE }
