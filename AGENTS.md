<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Each brand owns an independent typed configuration in `src/config/*config.ts`; existing landing components consume `BarberConfigContext`, defaulting to the original brand — prevents client data leakage while preserving the original page.
- The original brand stays at `/`; `/horizonte` renders the same landing composition with its own configuration and route-scoped theme and font stylesheet — isolates brand styling without a redesign.
- Production build validation must check every demo configuration — prevents publishing incomplete or unlabeled demo brands.
- Theme colors/fonts are injected as CSS variables via `src/config/theme.ts` in the root head; components use only semantic tokens — keeps palette consistent and configurable.
- Optional sections hide themselves (and their nav links) when their config is null/empty.
