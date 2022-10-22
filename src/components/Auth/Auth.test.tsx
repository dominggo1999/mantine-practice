import {
  describe, expect, test, beforeEach,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import Auth from '.';
import ContextWrapper from '../../../config/ContextWrapper';

describe('Accordion test', () => {
  let AuthComponent: HTMLElement;

  beforeEach(() => {
    const { container } = render(
      <Auth />,
      { wrapper: ContextWrapper },
    );
    AuthComponent = container;
  });

  test('Should show auth header', () => {
    expect(AuthComponent.getElementsByClassName('auth__header').length).toBe(1);
  });

  test('Should display header title', () => {
    expect(screen.getByText(/Log in to your account/i)).toBeDefined();
  });

  test("Should display don't have an account message", () => {
    expect(screen.getByText(/Don't have an account?/i)).toBeDefined();
  });

  test('Should display sign-up link', () => {
    expect(AuthComponent.getElementsByClassName('auth__sign-up-link').length).toBe(1);
  });

  test('Should display divider', () => {
    expect(screen.getByText(/Or continue with/i)).toBeDefined();
  });

  test('Should display something', () => {
    screen.getByText(/Or continue with/i);
  });
});
