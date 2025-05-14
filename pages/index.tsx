import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';
import logoUrl from '../public/transparent-logo.png';

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <div style={{ paddingBottom: '0.7em' }}>
          <Frame>
            <img src={logoUrl.src} alt="Logo of FNovels" />
          </Frame>
        </div>
        <Hero.Title>FNovels</Hero.Title>
        <Hero.Subtitle>
          Download and enjoy free unlimited official/fan translated novels
        </Hero.Subtitle>
        <Hero.Actions>
          <div style={{ display: 'flex', gap: '1em' }}>
            <Button to="/download">Download Now</Button>
            <Button to="/extra/api" type="secondary">
              API Docs
            </Button>
          </div>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <CardGrid>
          <Card icon="material-symbols:hangout-video-off" title="No Ads">
            FNovels will never show ads, enjoy reading without interruptions.
          </Card>
          <Card icon="mdi:content-save" title="Saves your progress">
            Will remember your progress in novels, so you can easily continue
            where you left off.
          </Card>
          <Card icon="mdi:bookmark" title="Bookmarking">
            Allows you to bookmark your favorite novels, so you can easily find
            them again.
          </Card>
          <Card icon="mdi:cloud-refresh" title="Syncing across devices">
            Enjoy syncing your progress with AniList, MAL, and more.
          </Card>
          <Card icon="mdi:power-plug-outline" title="Free API">
            Free API for developers to use.
          </Card>
          <Card icon="mdi:palette" title="Customizable">
            Supports various themes, font colors and font sizes so you can make
            it look however you want.
          </Card>
          <Card icon="mdi:cellphone" title="Only on Android">
            FNovels is only available on Android for now.
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
