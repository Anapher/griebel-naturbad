import { CssBaseline, makeStyles, Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import MdxCarousel, { CarouselImage } from '../components/mdx/MdxCarousel';
import SpecificationsTable from '../components/mdx/SpecificationsTable';
import '../style/layout.css';
import theme from '../style/theme';
import typographyTheme from '../utils/typography';
import typographyMDX from '../utils/typography-mdx';
import Appbar from './Appbar';
import Footer, { FOOTER_HEIGHT_PX } from './Footer';
import { MDXProvider } from '@mdx-js/react';
import AppbarDrawer from './AppbarDrawer';

const defaultComponents = {
   SpecificationsTable: (props) => <SpecificationsTable {...props} />,
   Carousel: (props) => <MdxCarousel {...props} />,
   CarouselImage: (props) => <CarouselImage {...props} />,
   h4: (props) => <h4 {...props} style={{ ...props.style, marginBottom: 0, marginTop: 24 }} />,
   h2: (props) => <h2 {...props} style={{ ...props.style, marginBottom: 0, marginTop: 48 }} />,
};

type Props = {
   elevateAppBar?: boolean;
   children?: React.ReactNode;
   transparentUntil?: number;
   fixed?: boolean;
   overlayContent?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
   appbarPlaceholder: {
      ...theme.mixins.toolbar,
   },
   content: {
      minHeight: `calc(100vh - ${FOOTER_HEIGHT_PX}px)`,
   },
}));

export default function Layout({
   children,
   elevateAppBar,
   transparentUntil,
   fixed = true,
   overlayContent = false,
}: Props) {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
   const classes = useStyles();
   const { Root, typography, ...components } = typographyMDX(typographyTheme);

   return (
      <ThemeProvider theme={theme}>
         <MDXProvider components={{ ...components, ...defaultComponents }}>
            <CssBaseline />
            <Appbar
               fixed={fixed}
               transparentUntil={transparentUntil}
               onToggleDrawer={handleToggleDrawer}
               elevation={elevateAppBar ? 1 : 0}
            />
            <div className={classes.content}>
               {!overlayContent && <div className={classes.appbarPlaceholder} />}
               {children}
            </div>
            <Footer />
            <AppbarDrawer open={isDrawerOpen} onClose={handleToggleDrawer} />
         </MDXProvider>
      </ThemeProvider>
   );
}
