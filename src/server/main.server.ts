import { bootstrapApplication } from '@angular/platform-browser';
import config from '@app/config';
import Container from '@app/container';

const bootstrap = () => bootstrapApplication(Container, config);

export default bootstrap;
