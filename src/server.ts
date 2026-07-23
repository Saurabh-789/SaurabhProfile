import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/app-engine.js';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(
  request: Request,
): Promise<Response> {
  const context = getContext();

  const response = await angularAppEngine.handle(request, context);

  return response ?? new Response('Not Found', { status: 404 });
}

/**
 * Request handler used by the Angular CLI and Netlify.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);