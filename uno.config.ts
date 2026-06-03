import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BASE_COLORS, FRAMEWORK_COLORS, THEMES } from '@kpu-mobile/themes'
import { entriesToCss, toArray } from '@unocss/core'
import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'
import presetSafeArea from '@yeungkc/unocss-preset-safe-area'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
        path.resolve(projectRoot, 'packages/components/**/*.{vue,js,ts}'),
      ],
    },
  },
  variants: [
    (matcher) => {
      if (!matcher.startsWith('hocus:') && !matcher.startsWith('hocus-')) {
        return matcher
      }
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover, ${s}:focus`,
      }
    },
  ],
  shortcuts: [
    [/^flex-?(col)?-(start|end|center|baseline|stretch)-?(start|end|center|between|around|evenly|left|right)?$/, ([, col, items, justify]) => {
      const cls = ['flex']
      if (col === 'col') {
        cls.push('flex-col')
      }
      if (items === 'center' && !justify) {
        cls.push('items-center')
        cls.push('justify-center')
      }
      else {
        cls.push(`items-${items}`)
        if (justify) {
          cls.push(`justify-${justify}`)
        }
      }
      return cls.join(' ')
    }],
  ],
  presets: [
    presetWind4({
      preflights: {
        theme: {
          process: createRemToPxProcessor(),
        },
      },
    }),
    presetAnimations(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetSafeArea(),
    {
      name: 'unocss-preset-shadcn',
      preflights: [
        {
          getCSS: () => {
            const returnCss: any = []
            Object.keys(BASE_COLORS).forEach((theme) => {
              const baseColorTheme = BASE_COLORS[theme as keyof typeof BASE_COLORS]
              Object.keys(baseColorTheme).forEach((colorScheme) => {
                const colorData = baseColorTheme[colorScheme as keyof typeof baseColorTheme]
                const css = entriesToCss(Object.entries(colorData as Record<string, string>))
                const roots = toArray(
                  colorScheme === 'light'
                    ? `[data-base-color="${theme}"]`
                    : `[data-base-color="${theme}"].dark,[data-theme="${theme}"] .dark `,
                )
                returnCss.push(roots.map(root => `${root}{color-scheme:${colorScheme};${css}}`).join(''))
              })
            })
            Object.keys(THEMES).forEach((theme) => {
              const themeData = THEMES[theme as keyof typeof THEMES]
              Object.keys(themeData).forEach((colorScheme) => {
                const colorData = themeData[colorScheme as keyof typeof themeData]
                const css = entriesToCss(Object.entries(colorData as Record<string, string>))
                const roots = toArray(
                  colorScheme === 'light'
                    ? `[data-theme="${theme}"]`
                    : `[data-theme="${theme}"].dark,[data-theme="${theme}"] .dark `,
                )
                returnCss.push(roots.map(root => `${root}{color-scheme:${colorScheme};${css}}`).join(''))
              })
            })
            Object.keys(FRAMEWORK_COLORS).forEach((colorScheme) => {
              const colorData = FRAMEWORK_COLORS[colorScheme as keyof typeof FRAMEWORK_COLORS]
              const css = entriesToCss(Object.entries(colorData as Record<string, string>))
              const roots = toArray(
                colorScheme === 'light'
                  ? `:root`
                  : `:root.dark `,
              )
              returnCss.push(roots.map(root => `${root}{color-scheme:${colorScheme};${css}}`).join(''))
            })

            return `
${returnCss.join('\n')}

::selection {
  color: oklch(var(--primary-foreground));
  background-color: oklch(var(--primary));
}

* {
  border-color: oklch(var(--border));
  scrollbar-color: oklch(var(--border)) transparent;
  scrollbar-width: thin;
}

body {
  color: oklch(var(--foreground));
  background: oklch(var(--background));
}

button:not(:disabled),
[role="button"]:not(:disabled) {
  cursor: pointer;
}
`
          },
        },
      ],
      theme: {
        colors: {
          background: 'oklch(var(--background))',
          foreground: 'oklch(var(--foreground))',
          card: {
            DEFAULT: 'oklch(var(--card))',
            foreground: 'oklch(var(--card-foreground))',
          },
          popover: {
            DEFAULT: 'oklch(var(--popover))',
            foreground: 'oklch(var(--popover-foreground))',
          },
          primary: {
            DEFAULT: 'oklch(var(--primary))',
            foreground: 'oklch(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'oklch(var(--secondary))',
            foreground: 'oklch(var(--secondary-foreground))',
          },
          muted: {
            DEFAULT: 'oklch(var(--muted))',
            foreground: 'oklch(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'oklch(var(--accent))',
            foreground: 'oklch(var(--accent-foreground))',
          },
          destructive: 'oklch(var(--destructive))',
          border: 'oklch(var(--border))',
          input: 'oklch(var(--input))',
          ring: 'oklch(var(--ring))',
        },
        radius: {
          xl: 'calc(var(--radius) + 4px)',
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      },
    },
  ],
  postprocess: [
    createRemToPxProcessor(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  configDeps: [
    path.resolve(projectRoot, 'packages/themes/index.ts'),
  ],
})
