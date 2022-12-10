import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

declare global {
  type CustomCSS = {
    css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  };

  type Params = Record<string, unknown>;

  type MutationParams = {
    query?: Record<string, unknown>;
    body?: unknown;
    param?: unknown;
  };

  type APIResponse<T = Record<string, unknown>> = T & { accessToken?: string };
  type MutationResponse = {
    isSuccess: boolean;
  };

  type SVGIcon = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}
