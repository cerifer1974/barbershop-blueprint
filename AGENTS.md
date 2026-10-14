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
- All business-specific data (brand, theme colors/fonts, copy, services, team, images, contacts, links) lives only in `src/config/barber.config.ts`; components must read from it and never hardcode client data — enables reuse for new clients by swapping one file.
- Theme colors/fonts are injected as CSS variables via `src/config/theme.ts` in the root head; components use only semantic tokens — keeps palette consistent and configurable.
- Optional sections hide themselves (and their nav links) when their config is null/empty.
