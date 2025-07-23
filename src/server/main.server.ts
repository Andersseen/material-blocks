import { bootstrapApplication } from '@angular/platform-browser';
import Container from '@app/container';
import { config } from './config.server';

const bootstrap = () => bootstrapApplication(Container, config);

export default bootstrap;
