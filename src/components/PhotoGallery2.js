/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import { LightboxButton, Link } from '../components'
import { photos_CBE, photos_SST, photos_UUR } from '../data/photos'
import { slides_CBE, slides_SST, slides_UUR } from '../data/slides'

const PhotoGalleryCBE = () => {
  const [index, setIndex] = React.useState(-1)
  const [open, setOpen] = React.useState(false)
  const [auto, setAuto] = React.useState(false)

  return (
    <>
      <header>
        <a href="../k62">k62</a>
        <h1>Corinna Bernshaus</h1>
      </header>
      <PhotoAlbum
        photos={photos_CBE}
        layout="rows"
        targetRowHeight={200}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: 'lazy' } }}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides_CBE}
      />
    </>
  )
}

const PhotoGallerySST = () => {
  const [index, setIndex] = React.useState(-1)
  const [open, setOpen] = React.useState(false)
  const [auto, setAuto] = React.useState(false)

  return (
    <>
      <header>
        <a href="../k62">k62</a>
        <h1>Stephan Stüttgen</h1>
      </header>

      <PhotoAlbum
        photos={photos_SST}
        layout="rows"
        targetRowHeight={200}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: 'lazy' } }}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides_SST}
      />
    </>
  )
}

const PhotoGalleryUUR = () => {
  const [index, setIndex] = React.useState(-1)
  const [open, setOpen] = React.useState(false)
  const [auto, setAuto] = React.useState(false)

  return (
    <>
      <header>
        <a href="../k62">❰ k62</a>
        <div className="placeholder"></div>
        <h1>Uscha Urbainski</h1>
      </header>

      <PhotoAlbum
        photos={photos_UUR}
        layout="rows"
        targetRowHeight={200}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: 'lazy' } }}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides_UUR}
      />
    </>
  )
}

export { PhotoGalleryCBE, PhotoGallerySST, PhotoGalleryUUR }
