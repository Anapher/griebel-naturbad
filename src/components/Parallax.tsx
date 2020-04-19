import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core"
import classNames from "classnames"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
})

type Props = {
  filter?: boolean
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  image: any
  small?: boolean
}

export default function Parallax({
  filter,
  className,
  children,
  style,
  image,
  small,
}: Props) {
  let windowScrollTop
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  )

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform)
      }
    }
  })

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3
    setTransform("translate3d(0," + windowScrollTop + "px,0)")
  }

  const classes = useStyles()
  const parallaxClasses = classNames(classes.parallax, className, {
    [classes.filter]: filter,
    [classes.small]: small,
  })

  return (
    <BackgroundImage
      fluid={image}
      className={parallaxClasses}
      style={{
        ...style,
        transform: transform,
      }}
    >
      {children}
    </BackgroundImage>
  )
}
