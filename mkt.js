/* ============================================================
   GALUNO ESCRITÓRIO — aba Marketing
   Módulo acoplado por fora: o index.html só carrega este arquivo.
   Para desligar tudo, basta remover a linha <script src="/mkt.js">.
   Regra de segurança: nenhum texto digitado pelo usuário entra em
   onclick="..." — só ids e números; a função lê o texto do objeto.
   ============================================================ */
(function () {
  if (window.__MKT__) return; window.__MKT__ = 1;

  document.head.insertAdjacentHTML('beforeend', "<style id=\"mkt-style\">.mk-monthbar{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px}\n.mk-monthbar .mk-mnav{display:inline-flex;align-items:center;gap:4px;background:var(--surface-1);border:1px solid var(--border);border-radius:10px;padding:3px}\n.mk-monthbar .mk-mnav button{width:1.5em;height:1.5em;border-radius:8px;display:grid;place-items:center;font-size:clamp(20px,1.01vw + 6.271px,32px);line-height:1.1;color:var(--text-2)}\n.mk-monthbar .mk-mnav button:hover{background:var(--surface-3);color:var(--text-1)}\n.mk-monthbar .mk-mnav h2{font-size:clamp(20px,1.01vw + 6.271px,32px);font-weight:600;min-width:9em;text-align:center;letter-spacing:-.2px}\n.mk-monthbar .mk-hint{font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--muted)}\n.mk-monthbar .grow{flex:1}\n.mk-alerts{display:grid;grid-template-columns:repeat(auto-fill,minmax(clamp(300px,26vw,560px),1fr));gap:12px;margin-bottom:18px}\n.mk-alert{display:flex;gap:12px;align-items:center;width:100%;text-align:left;font:inherit;padding:12px 14px;border-radius:var(--radius);background:var(--surface-1);border:1px solid var(--border);cursor:pointer;transition:.12s;position:relative;overflow:hidden}\n.mk-alert:hover{transform:translateY(-1px);box-shadow:0 2px 4px rgba(11,11,11,.06),0 8px 24px rgba(11,11,11,.09)}\n.mk-alert .mk-al-days{flex:0 0 auto;width:clamp(52px,3.4vw,86px);height:clamp(52px,3.4vw,86px);border-radius:12px;display:grid;place-items:center;text-align:center;line-height:1;font-weight:600;font-size:clamp(25px,1.26vw + 7.839px,40px);letter-spacing:-.5px;font-variant-numeric:tabular-nums}\n.mk-alert .mk-al-days small{display:block;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;letter-spacing:.3px;margin-top:3px;opacity:.85}\n.mk-alert .mk-al-info{flex:1;min-width:0;display:flex;flex-direction:column}\n.mk-alert .mk-al-name,.mk-alert .mk-al-sub{display:block}\n.mk-al-days.comem{background:#fbe4ee;color:#b3125c}.mk-al-days.promo{background:#fdf1dc;color:#9a5e00}.mk-al-days.now{background:var(--critical);color:#fff}\n:root[data-theme=\"dark\"] .mk-al-days.comem{background:#3d1229;color:#ff9ccb}:root[data-theme=\"dark\"] .mk-al-days.promo{background:#33280f;color:#fab219}\n@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]) .mk-al-days.comem{background:#3d1229;color:#ff9ccb}:root:not([data-theme=\"light\"]) .mk-al-days.promo{background:#33280f;color:#fab219}}\n.mk-al-days svg{width:22px;height:22px}\n.mk-alert .mk-al-name{font-weight:600;font-size:clamp(16px,0.838vw + 4.559px,26px);line-height:1.3;overflow-wrap:anywhere}\n.mk-alert .mk-al-sub{font-size:clamp(15px,0.754vw + 4.704px,24px);color:var(--text-2);margin-top:3px;line-height:1.35}\n.mk-alert .mk-al-sub b{color:var(--critical-ink);font-weight:600}\n.mk-alert.hoje{border-color:var(--critical);background:var(--crit-wash)}\n.mk-alert.hoje .mk-al-sub{color:var(--text-1)}\n.mk-kpis{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-bottom:18px}\n.mk-kpi{background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;cursor:pointer;transition:.12s;position:relative;overflow:hidden;text-align:left;min-width:0}\n.mk-kpi:hover{transform:translateY(-1px);box-shadow:0 2px 4px rgba(11,11,11,.06),0 8px 24px rgba(11,11,11,.09)}\n.mk-kpi::before{content:'';position:absolute;left:0;top:0;right:0;height:3px;background:var(--kc,var(--brand))}\n.mk-kpi{font:inherit;display:block;width:100%}\n.mk-kpi .k-label,.mk-kpi .k-val,.mk-kpi .k-foot{display:block}\n.mk-kpi .k-label{color:var(--text-2);font-size:clamp(15px,0.754vw + 4.704px,24px);font-weight:600;display:flex;align-items:center;gap:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.mk-kpi .k-val{font-size:clamp(39px,2.09vw + 10.4px,64px);font-weight:700;letter-spacing:-1px;margin-top:6px;line-height:1.08;font-variant-numeric:tabular-nums}\n.mk-kpi .k-foot{font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--muted);margin-top:7px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.mk-kpi .k-foot b{color:var(--critical-ink)}\n.mk-kpi.bad .k-val{color:var(--critical-ink)}\n.mk-section{margin-bottom:22px}\n.mk-section .section-title{margin:4px 0 12px;flex-wrap:wrap;gap:8px 12px}\n.mk-section .section-title h2{font-size:clamp(20px,1.01vw + 6.271px,32px)}\n.mk-section .section-title .st-sub{font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--muted);font-weight:400}\n.mk-legend{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n.mk-legend .lg{display:inline-flex;align-items:center;gap:5px;font-size:clamp(15px,0.754vw + 4.704px,24px);color:var(--text-2);font-weight:600;cursor:pointer;padding:3px 8px;border-radius:20px;border:1px solid transparent;font-family:inherit}\n.mk-legend button.lg:hover{background:var(--surface-3);border-color:var(--border)}\n.mk-legend .lg.off{opacity:.5;text-decoration:line-through}\n.mk-legend span.lg{cursor:default}\n.mk-legend .dot{width:9px;height:9px;border-radius:3px}\n.mk-legend .dot.dash{background:transparent;border:1.5px dashed #898781}\n.mk-cal{background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}\n.mk-cal-head{display:grid;grid-template-columns:repeat(7,minmax(0,1fr))}\n.mk-cal-head div{padding:10px 8px;text-align:center;font-size:clamp(14px,0.67vw + 4.848px,22px);text-transform:uppercase;letter-spacing:.4px;color:var(--muted);font-weight:600;border-bottom:1px solid var(--border)}\n.mk-cal-head div.wknd{color:var(--brand-ink)}\n.mk-cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr))}\n.mk-cell{min-height:clamp(130px,7.6vw,210px);border-right:1px solid var(--border-2);border-bottom:1px solid var(--border-2);padding:6px 7px;cursor:pointer;transition:background .12s;min-width:0;position:relative}\n.mk-cell:nth-child(7n){border-right:none}\n.mk-cell:hover{background:var(--surface-2)}\n.mk-cell.out{background:var(--surface-2)}\n.mk-cell.out .dn{opacity:.35}\n.mk-cell.out .mk-ev{opacity:.75}\n.mk-cell.wknd:not(.out){background:color-mix(in srgb,var(--brand-wash) 35%,transparent)}\n.mk-cell .dn{font-size:clamp(16px,0.838vw + 4.559px,26px);font-weight:600;color:var(--text-2);display:inline-grid;place-items:center;min-width:1.7em;height:1.7em;padding:0 .25em;border-radius:999px}\n.mk-cell.today .dn{background:var(--brand);color:#fff}\n.mk-cell.drag-over{outline:2px dashed var(--brand);outline-offset:-3px;background:var(--brand-wash)}\n.mk-date{display:flex;align-items:flex-start;gap:5px;margin-top:4px;padding:3px 7px;border-radius:6px;background:#fbe4ee;color:#b3125c;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;letter-spacing:.2px;line-height:1.25;cursor:pointer}\n.mk-date span{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}\n.mk-date svg{margin-top:1px}\n.mk-date.promo{background:#fdf1dc;color:#9a5e00}\n:root[data-theme=\"dark\"] .mk-date{background:#3d1229;color:#ff9ccb}\n:root[data-theme=\"dark\"] .mk-date.promo{background:#33280f;color:#fab219}\n@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]) .mk-date{background:#3d1229;color:#ff9ccb}:root:not([data-theme=\"light\"]) .mk-date.promo{background:#33280f;color:#fab219}}\n.mk-date svg{width:11px;height:11px;flex:0 0 auto}\n.mk-ev{display:flex;align-items:flex-start;gap:5px;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:4px 7px;border-radius:5px;margin-top:4px;cursor:grab;border:1px solid transparent;min-width:0;line-height:1.25;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n.mk-ev>*{flex:0 0 auto}\n.mk-ev .n{margin-right:.4em}\n.mk-ev .n::after{content:'\\00a0'}\n.mk-ev:active{cursor:grabbing}\n.mk-ev .n{font-weight:600;font-variant-numeric:tabular-nums;flex:0 0 auto;opacity:.85}\n.mk-ev .tt{overflow:hidden;text-overflow:ellipsis;min-width:0}\n.mk-ev.ideia{border-style:dashed;border-color:#898781;color:var(--text-2);background:transparent}\n.mk-ev.late{background:var(--crit-wash)!important;color:var(--critical-ink)!important;border-color:var(--critical)}\n.mk-ev.hoje{box-shadow:0 0 0 1.5px var(--brand) inset}\n.mk-ev.start{background:transparent;border:1px dotted var(--border);color:var(--muted);font-weight:400}\n.mk-more{font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--brand-ink);margin-top:4px;font-weight:600;cursor:pointer}\n.mk-more:hover{text-decoration:underline}\n.mk-kanban{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;align-items:start}\n.mk-kanban .kcol{min-width:0}\n.mk-kanban .kcol{padding:10px;border-top:3px solid var(--sc,var(--border))}\n.mk-kanban .kcol h3{font-size:clamp(16px,0.838vw + 4.559px,26px)}\n.mk-kanban .kcol h3 .count{cursor:pointer;background:var(--surface-3);padding:1px 8px;border-radius:10px;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;margin-left:auto;color:var(--muted);font-family:inherit}\n.mk-kanban .kcol h3 .count:hover{background:var(--brand-wash);color:var(--brand-ink)}\n.mk-kanban .kempty{font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--muted);text-align:center;padding:14px 6px;border:1px dashed var(--border);border-radius:8px}\n.mk-card{background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius-s);padding:10px 11px;margin-bottom:9px;box-shadow:0 1px 2px rgba(11,11,11,.04);cursor:grab;transition:.12s;position:relative;overflow:hidden}\n.mk-card:hover{border-color:var(--brand);box-shadow:0 2px 8px rgba(11,11,11,.08)}\n.mk-card:active{cursor:grabbing}\n.mk-card.dragging{opacity:.5}\n.mk-card .mk-rej{display:flex;align-items:center;gap:6px;background:var(--critical);color:#fff;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:4px 9px;margin:-10px -11px 9px;letter-spacing:.2px}\n.mk-card .mk-rej span{font-weight:400;min-width:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.3}\n.mk-card .mk-rej{align-items:flex-start}\n.mk-card .mk-hoje{display:flex;align-items:center;gap:6px;background:var(--brand);color:#fff;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:4px 9px;margin:-10px -11px 9px}\n.mk-card .mk-late{display:flex;align-items:center;gap:6px;background:var(--crit-wash);color:var(--critical-ink);font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:4px 9px;margin:-10px -11px 9px}\n.mk-card .mk-ch{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:6px}\n.mk-num{font-size:clamp(15px,0.754vw + 4.704px,24px);font-weight:600;color:var(--text-2);font-variant-numeric:tabular-nums;letter-spacing:.2px;background:var(--surface-3);padding:1px 7px;border-radius:5px;flex:0 0 auto}\n.mk-cat{font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:2px 8px;border-radius:12px;line-height:1.3;min-width:0;max-width:100%;text-align:right;overflow-wrap:anywhere}\n.mk-cron-card .ch{min-width:0}\n.mk-cron-card .mk-cat,.mk-card .mk-cat{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;flex:0 1 auto}\n.mk-card .mk-ch{min-width:0}\n.mk-card .mk-title{font-weight:600;font-size:clamp(16px,0.838vw + 4.559px,26px);line-height:1.35;overflow-wrap:anywhere;margin-bottom:7px}\n.mk-chan{display:flex;gap:4px;flex-wrap:wrap;align-items:center}\n.ci{position:relative}\n.mk-chan .ci{width:1.8em;height:1.8em;border-radius:6px;display:grid;place-items:center;flex:0 0 auto;font-size:clamp(14px,0.67vw + 4.848px,22px)}\n.ci .bd{position:absolute;right:-3px;bottom:-3px;width:8px;height:8px;border-radius:50%;background:#e00a35;border:1.5px solid var(--surface-1);font-size:0;overflow:hidden}\n.mk-chan .ci svg{width:.62em;height:.62em;fill:var(--tinta,#fff)}\n.mk-chan .ci.big{width:26px;height:26px;border-radius:7px}\n.mk-chan .ci.big svg{width:15px;height:15px}\n.mk-chan .ci .lt{color:var(--tinta,#fff);font-size:.55em;font-weight:700;line-height:1.15;max-width:100%;overflow:hidden;text-align:center}\n.mk-card .mk-foot{display:flex;align-items:center;gap:6px;margin-top:8px;justify-content:space-between;min-width:0}\n.mk-card .mk-foot .left{display:flex;align-items:center;gap:6px;min-width:0;flex-wrap:wrap}\n.mk-pill{font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:2px 7px;border-radius:5px;background:var(--surface-3);color:var(--text-2);white-space:nowrap;font-variant-numeric:tabular-nums}\n.mk-pill.late{background:var(--crit-wash);color:var(--critical-ink)}\n.mk-pill.warn{background:var(--warn-wash);color:color-mix(in srgb,var(--warning) 60%,var(--text-1))}\n.mk-pill.wrap{white-space:normal;overflow-wrap:anywhere;text-align:left}\n.mk-prog{display:flex;align-items:center;gap:6px;font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}\n.mk-prog i{display:block;width:44px;height:4px;background:var(--surface-3);border-radius:3px;overflow:hidden}\n.mk-prog i b{display:block;height:100%;background:var(--good)}\n.mk-card .mk-actions{display:flex;gap:6px;margin-top:9px}\n.mk-card .mk-actions .btn{flex:1;justify-content:center;padding:6px 8px;font-size:clamp(15px,0.754vw + 4.704px,24px);box-shadow:none}\n.btn.ok{background:var(--good)}.btn.ok:hover{background:#0a8a0a}\n.btn.danger{background:var(--surface-1);color:var(--critical-ink);border:1px solid var(--critical);box-shadow:none}.btn.danger:hover{background:var(--crit-wash)}\n.mk-wait{font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--muted);margin-top:8px;display:flex;align-items:center;gap:5px}\n.mk-newcard{width:100%;border:1px dashed var(--border);border-radius:8px;padding:9px;font-size:clamp(16px,0.838vw + 4.559px,26px);font-weight:600;color:var(--text-2);margin-top:2px;transition:.12s}\n.mk-newcard:hover{border-color:var(--brand);color:var(--brand-ink);background:var(--brand-wash)}\n.mk-cron{display:grid;grid-template-columns:repeat(auto-fill,minmax(clamp(300px,23vw,520px),1fr));gap:12px}\n.mk-cron-card{background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius);padding:14px 15px;min-width:0}\n.mk-cron-card .ch{display:flex;align-items:center;gap:8px;margin-bottom:6px;width:100%;text-align:left;font:inherit;cursor:pointer;border-radius:8px}\n.mk-cron-card .ch:hover{background:var(--surface-2)}\n.mk-cron-card .ch .grow{flex:1}\n.mk-cron-card .ct{display:block;width:100%;text-align:left;font:inherit;font-weight:600;font-size:clamp(16px,0.838vw + 4.559px,26px);line-height:1.35;cursor:pointer;overflow-wrap:anywhere;margin-bottom:8px}\n.mk-cron-card .ct:hover{color:var(--brand-ink)}\n.mk-step{display:flex;align-items:center;gap:8px;padding:8px 4px;border-bottom:1px solid var(--border-2);font-size:clamp(16px,0.838vw + 4.559px,26px);min-width:0;flex-wrap:wrap}\n.mk-step>.st{flex:1 1 auto;min-width:0;overflow-wrap:normal;word-break:normal;hyphens:none}\n.mk-step:last-child{border-bottom:none}\n.mk-step .st{flex:1;min-width:0;overflow-wrap:anywhere;cursor:pointer;text-align:left;font:inherit;padding:0}\n.mk-step button.st:hover{color:var(--brand-ink)}\nbody[data-route=\"marketing\"] .minichk:disabled,#modal .minichk:disabled{cursor:default;opacity:.55}\n.mk-step.done .st{text-decoration:line-through;color:var(--muted)}\n.mk-step .sd{font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}\n.mk-step .sd.late{color:var(--critical-ink);font-weight:600}\n.mk-step .av.xs{width:2em;height:2em;font-size:clamp(12px,0.67vw + 2.848px,20px);flex:0 0 auto}\n.mk-cron-foot{display:flex;align-items:center;gap:8px;margin-top:10px;justify-content:space-between;flex-wrap:wrap}\n.mk-cron-foot .mk-prog i{width:80px}\n.mk-rot{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}\n.mk-rot-col{background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:8px;min-height:90px;min-width:0}\n.mk-rot-col.today{border-color:var(--brand);box-shadow:0 0 0 1px var(--brand) inset;background:var(--surface-1)}\n.mk-rot-col h4{font-size:clamp(15px,0.754vw + 4.704px,24px);color:var(--text-2);margin:0 0 6px;font-weight:600;display:flex;justify-content:space-between;align-items:center}\n.mk-rot-col h4 span{color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums;font-size:clamp(14px,0.67vw + 4.848px,22px)}\n.mk-rot-col h4 .hj{background:var(--brand);color:#fff;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:1px 6px;border-radius:10px;letter-spacing:.3px}\n.mk-rot-item{display:flex;align-items:flex-start;gap:7px;padding:6px 4px;border-radius:7px;cursor:pointer;font-size:clamp(16px,0.838vw + 4.559px,26px);line-height:1.35;transition:.12s;min-width:0;width:100%;text-align:left;font-family:inherit}\n.mk-rot-item.somente-leitura{cursor:default;opacity:.72}\n.mk-rot-item.somente-leitura .minichk{border-style:dashed}\n.mk-rot-item:hover{background:var(--surface-3)}\n.mk-rot-item .minichk{margin-top:1px}\n.mk-rot-item .rt{flex:1;min-width:0;overflow-wrap:anywhere}\n.mk-rot-item.done .rt{text-decoration:line-through;color:var(--muted)}\n.mk-rot-item .av.xs{width:2em;height:2em;font-size:clamp(12px,0.67vw + 2.848px,20px);flex:0 0 auto;margin-top:1px}\n.mk-rot-empty{font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--muted);text-align:center;padding:10px 4px}\n.mk-rot-bar{height:6px;background:var(--surface-3);border-radius:3px;overflow:hidden;width:120px}\n.mk-rot-bar b{display:block;height:100%;background:var(--good)}\n.mk-rot-hint,.mk-cal-hint{display:none}\n@media (max-width:760px){.mk-cal-hint{display:inline}}\n@media (max-width:1200px){.mk-rot-hint{display:inline}}\n.mk-cfg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}\n.mk-cfg-card{background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;cursor:pointer;transition:.12s;text-align:left;min-width:0}\n.mk-cfg-card:hover{transform:translateY(-1px);border-color:var(--brand)}\n.mk-cfg-card{font:inherit;display:block;width:100%}\n.mk-cfg-card .h{font-size:clamp(16px,0.838vw + 4.559px,26px);font-weight:600;display:flex;align-items:center;gap:8px}\n.mk-cfg-card .h .count{margin-left:auto;background:var(--surface-3);color:var(--text-2);font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;padding:1px 8px;border-radius:10px}\n.mk-cfg-card .p{display:block;font-size:clamp(15px,0.754vw + 4.704px,24px);color:var(--muted);margin-top:4px}\n.mk-cfg-card .prev{display:flex;gap:5px;flex-wrap:wrap;margin-top:10px}\n.modal.wide{max-width:980px}\n.mk-mhead{display:flex;align-items:center;gap:10px;padding:18px 22px;border-bottom:1px solid var(--border);flex-wrap:wrap}\n.mk-mhead .mk-num{font-size:clamp(16px,0.838vw + 4.559px,26px);padding:3px 9px}\n.mk-mhead h3{font-size:clamp(20px,1.01vw + 6.271px,32px);font-weight:600;flex:1 1 200px;min-width:0;overflow-wrap:anywhere}\n.mk-mhead .icon-btn{margin-left:auto;flex:0 0 auto}\n.mk-mhead .tag{font-size:clamp(16px,0.838vw + 4.559px,26px)}\n.mk-mgrid{display:grid;grid-template-columns:1.5fr 1fr;gap:20px;padding:20px 22px}\n.mk-mgrid>*{min-width:0}\n.mk-mgrid .col{display:flex;flex-direction:column;gap:15px}\n.mk-side{background:var(--surface-2);border:1px solid var(--border-2);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:13px}\n.mk-side .field label{font-size:clamp(15px,0.754vw + 4.704px,24px)}\n.mk-side .field input,.mk-side .field select{background:var(--surface-1);padding:8px 10px;font-size:clamp(16px,0.838vw + 4.559px,26px)}\n.mk-datebox{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.mk-datebox .db{background:var(--surface-1);border:1px solid var(--border);border-radius:8px;padding:8px 10px;min-width:0}\n.mk-datebox .db label{display:block;font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;color:var(--muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:.3px}\n.mk-datebox .db b{font-size:clamp(16px,0.838vw + 4.559px,26px);font-weight:600;font-variant-numeric:tabular-nums}\n.mk-datebox .db b.late{color:var(--critical-ink)}\n.mk-datebox .db small{display:block;font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--muted)}\n.mk-datebox .db.auto{border-style:dashed}\n.mk-drive{display:flex;gap:6px;align-items:center}\n.mk-drive code{flex:1;min-width:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:clamp(15px,0.754vw + 4.704px,24px);background:var(--surface-1);border:1px solid var(--border);border-radius:8px;padding:8px 10px;overflow-wrap:anywhere;line-height:1.4}\n.mk-chanpick{display:flex;flex-wrap:wrap;gap:7px}\n.mk-chanpick .chip-pick{gap:7px;padding:5px 11px 5px 5px;font-family:inherit}\n.mk-chanpick .chip-pick:disabled{cursor:default;opacity:.7}\n.mk-chanpick .chip-pick .ci{width:1.8em;height:1.8em;border-radius:6px;display:grid;place-items:center;font-size:clamp(14px,0.67vw + 4.848px,22px)}\n.mk-chanpick .chip-pick .ci svg{width:13px;height:13px;fill:var(--tinta,#fff)}\n.mk-chanpick .chip-pick .ci .lt{color:var(--tinta,#fff);font-size:.55em;font-weight:700;line-height:1.15;max-width:100%;overflow:hidden;text-align:center}\n.mk-chanpick .chip-pick.on::before{content:none}\n.mk-chanpick .chip-pick.on{box-shadow:0 0 0 2px var(--brand) inset}\n.mk-links .linkrow{display:flex;align-items:center;gap:6px;margin-bottom:6px}\n.mk-links .linkrow a{flex:1;min-width:0;display:flex;align-items:center;gap:8px;overflow:hidden;text-decoration:none;color:var(--brand-ink);background:var(--surface-3);padding:7px 10px;border-radius:8px;font-size:clamp(16px,0.838vw + 4.559px,26px);font-weight:600}\n.mk-links .linkrow a:hover{text-decoration:underline}\n.mk-links .linkrow a>span:first-child{min-width:0;overflow-wrap:anywhere;flex:1 1 auto}\n.mk-links .linkrow a .u{color:var(--muted);font-weight:400;font-size:clamp(14px,0.67vw + 4.848px,22px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}\n.mk-links .linkrow a .ext{margin-left:auto;flex:0 0 auto;width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:2}\n.mk-hist{display:flex;flex-direction:column;gap:8px}\n.mk-hist .h{display:flex;gap:9px;align-items:flex-start;font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--text-2)}\n.mk-hist .h b{color:var(--text-1);font-weight:600}\n.mk-hist .h .when{color:var(--muted);font-size:clamp(14px,0.67vw + 4.848px,22px)}\n.mk-hist .h.rej{background:var(--crit-wash);color:var(--critical-ink);padding:8px 10px;border-radius:8px}\n.mk-hist .h.rej b{color:var(--critical-ink)}\n.mk-step-edit{display:flex;align-items:center;gap:7px;padding:6px 8px;border:1px solid var(--border);border-radius:9px;background:var(--surface-2);margin-bottom:6px}\n.mk-step-edit .st{flex:1;min-width:0;font-size:clamp(16px,0.838vw + 4.559px,26px);overflow-wrap:anywhere;cursor:pointer;text-align:left;font-family:inherit;padding:0}\n.mk-step-edit button.st:hover{color:var(--brand-ink)}\n.mk-step-edit .sx-group{display:inline-flex;gap:2px;flex:0 0 auto}\n.mk-step-edit .fase{font-family:inherit}\n.mk-step-edit.done .st{text-decoration:line-through;color:var(--muted)}\n.mk-step-edit input[type=date]{border:1px solid var(--border);border-radius:6px;padding:3px 6px;background:var(--surface-1);color:var(--text-1);font-size:clamp(15px,0.754vw + 4.704px,24px);flex:0 0 118px;width:118px}\n.mk-step-edit select{border:1px solid var(--border);border-radius:6px;padding:3px 6px;background:var(--surface-1);color:var(--text-1);font-size:clamp(15px,0.754vw + 4.704px,24px);max-width:110px}\n.mk-step-edit .sx{cursor:pointer;color:var(--muted);font-size:clamp(17px,0.921vw + 4.415px,28px);padding:2px 5px;border-radius:5px;min-width:24px;font-family:inherit}\n.mk-step-edit .sx:hover{background:var(--surface-3);color:var(--text-1)}\n.mk-step-edit .fase{font-size:clamp(14px,0.67vw + 4.848px,22px);font-weight:600;letter-spacing:.3px;padding:1px 6px;border-radius:4px;background:var(--surface-3);color:var(--muted);text-transform:uppercase}\n.mk-step-edit .fase.pos{background:var(--good-wash);color:color-mix(in srgb,var(--good) 65%,var(--text-1))}\n.mk-rejbox{background:var(--crit-wash);border:1px solid var(--critical);color:var(--critical-ink);border-radius:10px;padding:10px 12px;font-size:clamp(16px,0.838vw + 4.559px,26px);display:flex;gap:8px;align-items:flex-start}\n.mk-rejbox b{font-weight:600}\n.mk-rejbox .x{margin-left:auto;cursor:pointer;font-weight:600;flex:0 0 auto}\n.mk-list .li{cursor:pointer;border-radius:8px;padding:10px 8px;width:100%;text-align:left;font:inherit}\n.mk-list .li .t{display:flex;flex-direction:column}\n.mk-list .li .tt,.mk-list .li .ts{display:block}\n.mk-list .li:hover{background:var(--surface-2)}\n.mk-tabs{display:flex;gap:4px;background:var(--surface-3);border-radius:10px;padding:3px;margin-bottom:4px}\n.mk-tabs button{flex:1;padding:8px;border-radius:8px;font-weight:600;font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--text-2)}\n.mk-tabs button.active{background:var(--surface-1);color:var(--text-1);box-shadow:0 1px 2px rgba(0,0,0,.08)}\n.mk-cfg-row{display:flex;align-items:center;gap:10px;padding:9px 6px;border-bottom:1px solid var(--border-2);min-width:0;width:100%;text-align:left;font:inherit}\nbutton.mk-cfg-row{cursor:pointer;border-radius:8px}button.mk-cfg-row:hover{background:var(--surface-2)}\n.mk-cfg-row:last-child{border-bottom:none}\n.mk-cfg-row .nm{flex:1;min-width:0;font-weight:600;font-size:clamp(16px,0.838vw + 4.559px,26px);overflow-wrap:anywhere}\n.mk-cfg-row .nm small{display:block;color:var(--muted);font-weight:400;font-size:clamp(15px,0.754vw + 4.704px,24px)}\n.mk-cfg-row .swatch{width:16px;height:16px;border-radius:5px;flex:0 0 auto;border:1px solid var(--border)}\n.mk-cfg-row .icon-btn{flex:0 0 auto}\n.mk-sug{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px dashed var(--border);border-radius:9px;margin-bottom:6px;font-size:clamp(16px,0.838vw + 4.559px,26px);width:100%;text-align:left;font-family:inherit}\nbutton.mk-sug{cursor:pointer}button.mk-sug:hover{border-color:var(--brand);background:var(--brand-wash)}\n.mk-sug .nm{flex:1;min-width:0}\n.mk-sug .nm small{color:var(--muted);font-size:clamp(14px,0.67vw + 4.848px,22px);margin-left:6px}\n.mk-colorpick{display:flex;gap:6px;flex-wrap:wrap}\n.mk-colorpick button{width:24px;height:24px;border-radius:7px;cursor:pointer;border:2px solid transparent;padding:0}\n.mk-colorpick button.on{border-color:var(--text-1)}\n.mk-daypick{display:flex;gap:5px;flex-wrap:wrap}\n.mk-daypick .wkchip.on{background:var(--brand-wash);border-color:var(--brand);color:var(--brand-ink);font-weight:600}\n.mk-dayhead{display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n.mk-dayhead h3{font-size:clamp(20px,1.01vw + 6.271px,32px);font-weight:600}\n.mk-empty{font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--muted);padding:16px;text-align:center;border:1px dashed var(--border);border-radius:10px}\n.note-warn{font-size:clamp(15px,0.754vw + 4.704px,24px);color:var(--warn-ink);background:var(--warn-wash);padding:9px 12px;border-radius:8px}\n.mk-mini{display:flex;flex-direction:column;gap:8px}\n.mk-mini .row{display:flex;align-items:center;gap:10px;font-size:clamp(16px,0.838vw + 4.559px,26px);padding:8px 0;border-bottom:1px solid var(--border-2);cursor:pointer;width:100%;text-align:left;font-family:inherit;min-width:0;flex-wrap:wrap}\n.mk-mini .row>.dt{flex:0 0 auto;font-variant-numeric:tabular-nums}\n.mk-mini .row>.tt,.mk-mini .row>span:not(.dt){min-width:0;overflow:hidden;text-overflow:ellipsis}\n.mk-mini .row:last-child{border-bottom:none}\n.mk-mini .row:hover{color:var(--brand-ink)}\n.mk-mini .row .dt{font-weight:600;font-variant-numeric:tabular-nums;color:var(--text-2);width:auto;min-width:4.6em;flex:0 0 auto;white-space:nowrap}\n.mk-mini .row .tt{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600}\n.mk-mini-kpis{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:4px}\n.mk-mini-kpis button{font-size:clamp(15px,0.754vw + 4.704px,24px);font-weight:600;padding:3px 9px;border-radius:20px;background:var(--surface-3);color:var(--text-2);display:inline-flex;align-items:center;gap:5px;cursor:pointer;font-family:inherit}\n.mk-mini-kpis button:hover{background:var(--brand-wash);color:var(--brand-ink)}\n#mTitle:focus{outline:none}\n@media (max-width:1200px){\n.mk-rot{display:flex;overflow-x:auto;gap:8px;padding-bottom:6px}\n.mk-rot-col{min-width:170px;flex:0 0 170px}\n.mk-kpis{grid-template-columns:repeat(3,minmax(0,1fr))}\n.mk-kanban{grid-template-columns:repeat(3,minmax(0,1fr))}\n.mk-cfg{grid-template-columns:1fr}\n}\n@media (max-width:900px){\n.mk-kanban{grid-template-columns:repeat(2,minmax(0,1fr))}\n.mk-mgrid{grid-template-columns:1fr}\n}\n@media (max-width:760px){\n.mk-kpis{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n.mk-kpi{padding:11px 12px}.mk-kpi .k-val{font-size:clamp(25px,1.26vw + 7.839px,40px)}\n.mk-kanban{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:10px;padding-bottom:8px}\n.mk-kanban .kcol{flex:0 0 84%;scroll-snap-align:center}\n.mk-cal{overflow-x:auto;overscroll-behavior-x:contain}\n.mk-cal-head,.mk-cal-grid{min-width:672px;grid-template-columns:repeat(7,1fr);overflow-x:visible}\n.mk-cell{min-height:84px}\n.mk-cron{grid-template-columns:1fr}\n.mk-alerts{grid-template-columns:1fr}\n.mk-monthbar .mk-mnav h2{min-width:130px;font-size:clamp(17px,0.921vw + 4.415px,28px)}\n.mk-datebox{grid-template-columns:1fr}\n.mk-mhead{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:8px 10px}\n.mk-mhead .mk-num{grid-column:1}.mk-mhead h3{grid-column:2}.mk-mhead .icon-btn{grid-column:3}.mk-mhead .tag{grid-column:2;grid-row:2;justify-self:start}\n.mk-step-edit{flex-wrap:wrap}\n.mk-step-edit .st{flex:1 1 60%}\n.mk-step-edit select{flex:1 1 120px;max-width:none}\n.mk-step-edit .sx-group{margin-left:auto}\n}\n:root[data-theme=\"rosa\"]{\n--surface-1:#ffffff; --surface-2:#fff6f9; --surface-3:#fbe9f0;\n--page:#f8dfe9;\n--text-1:#2a1420; --text-2:#5c3f4d; --muted:#7c5e6c;\n--grid:#f0d3de; --border:rgba(160,40,90,.16); --border-2:rgba(160,40,90,.09);\n--brand:#de2280; --brand-d:#c42577; --brand-wash:#fde0ec;\n--good:#0a8a0a; --warning:#e0920a; --serious:#ec835a; --critical:#d03b3b;\n--good-wash:#e7f6e7; --warn-wash:#fdf1dc; --serious-wash:#fdeee7; --crit-wash:#fbe8e8;\n--brand-ink:#c21d6f; --good-ink:#097809; --warn-ink:#8d5c06; --serious-ink:#b44115; --critical-ink:#c12e2e;\n--purple-ink:#5a45c9; --purple-wash:#ece9fb; --marca-ouro:#8a5a3c;\n--shadow:0 1px 2px rgba(120,30,70,.06),0 4px 16px rgba(120,30,70,.10);\n}\n:root[data-theme=\"rosa\"] .topbar h1,:root[data-theme=\"rosa\"] .section-title h2{color:var(--brand-ink)}\n:root[data-theme=\"rosa\"] .topbar{background:var(--surface-2)}\n:root[data-theme=\"rosa\"] .brand .logo{background:linear-gradient(135deg,var(--brand),#8e2a6a)}\n:root[data-theme=\"rosa\"] .mk-date{background:#c2185b;color:#fff}\n:root[data-theme=\"rosa\"] .mk-date.promo{background:#b45309;color:#fff}\n:root[data-theme=\"rosa\"] .mk-al-days.comem{background:#c2185b;color:#fff}\n:root[data-theme=\"rosa\"] .mk-al-days.promo{background:#b45309;color:#fff}\n:root[data-theme=\"rosa\"] .mk-cell.wknd:not(.out){background:#fff2f7}\nbody[data-route=\"marketing\"] :focus-visible,#modal :focus-visible{outline:2px solid var(--brand);outline-offset:2px}\n.mk-toque-hint{display:none}\n@media (max-width:760px){.mk-drag-hint{display:none}.mk-toque-hint{display:inline}}\nbody[data-route=\"marketing\"] .mk-rot-item.somente-leitura{cursor:default}\nbody[data-route=\"marketing\"] .mk-rot-item.somente-leitura:hover{background:transparent;border-color:var(--border)}\nbody[data-route=\"marketing\"] input.mk-ren,#modal input.mk-ren{flex:1;min-width:0;font:inherit;font-size:clamp(16px,0.838vw + 4.559px,26px);padding:5px 8px;border:1px solid var(--brand);border-radius:7px;background:var(--surface-1);color:var(--text-1)}\nbody .mk-mini-kpis .mk-mini-lab{font-size:clamp(16px,0.838vw + 4.559px,26px);color:var(--muted);font-weight:600;align-self:center;margin-right:2px}\n@media (min-width:761px) and (max-width:1200px){\nbody[data-route=\"marketing\"] .mk-ev .tt{white-space:normal;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.25}\nbody[data-route=\"marketing\"] .mk-cell{min-height:clamp(120px,7vw,190px)}\n}\n#modal #mTitle:focus,#modal #mTitle:focus-visible{outline:none}\n.mk-toast{transition:bottom .18s ease}</style>");

  /* foco seguro: o modal pode ter sido redesenhado e o campo não existir mais */
  const foco = sel => { const e = document.querySelector(sel); if (e) { try { e.focus(); } catch (x) { } } return e; };

  /* ---------------- datas ---------------- */
  const pad2 = n => String(n).padStart(2, '0');
  const isoOf = d => d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  const hoje = () => isoOf(new Date());
  const somaDias = (base, n) => { const d = new Date(base + 'T12:00:00'); d.setDate(d.getDate() + n); return isoOf(d); };
  const dm = s => s ? s.slice(8, 10) + '/' + s.slice(5, 7) : '—';
  const dmy = s => s ? s.slice(8, 10) + '/' + s.slice(5, 7) + '/' + s.slice(0, 4) : '—';
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const porExtenso = s => cap(new Date(s + 'T12:00:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }));
  const mesCurto = s => cap(new Date(s + 'T12:00:00').toLocaleDateString('pt-BR', { month: 'short' })).replace('.', '');
  const mesNome = m => cap(new Date(2000, m, 1).toLocaleDateString('pt-BR', { month: 'long' }));
  const nPecas = n => n + ' peça' + (n === 1 ? '' : 's');
  /* o gatilho grava 'moveu de ideia para prod'; na tela isso vira português */
  const textoHist = t => String(t || '').replace(/\b(ideia|prod|rev|aprov|pub)\b/g, m => (ESTAGIOS.find(e => e.id === m) || { label: m }).label);
  /* corta no espaço anterior, para não deixar palavra pela metade */
  const cortaBonito = (t, max) => { if (t.length <= max) return t; const c = t.slice(0, max); const i = c.lastIndexOf(' '); return (i > max * 0.6 ? c.slice(0, i) : c).replace(/[\s,;.-]+$/, ''); };
  const faltam = s => { const t = new Date(); t.setHours(0, 0, 0, 0); return Math.round((new Date(s + 'T00:00:00') - t) / 86400000); };
  const diaSemana = s => { const g = new Date(s + 'T12:00:00').getDay(); return g === 0 ? 7 : g; };
  const segundaDe = s => somaDias(s, 1 - diaSemana(s));
  const desde = ts => { const s = (Date.now() - new Date(ts).getTime()) / 1000; if (s < 60) return 'agora'; if (s < 3600) return Math.floor(s / 60) + ' min'; if (s < 86400) return Math.floor(s / 3600) + ' h'; return Math.floor(s / 86400) + ' d'; };
  const WD = ['', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const WDL = ['', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
  const clone = o => JSON.parse(JSON.stringify(o));
  const limpaUrl = u => { u = (u || '').trim(); if (!u) return ''; if (/^\s*(javascript|data|vbscript):/i.test(u)) return ''; if (!/^https?:\/\//i.test(u)) u = 'https://' + u; return u; };
  /* o showToast do sistema é sempre verde; erro precisa ser vermelho, senão
     "não deu certo" tem a cara de "deu certo". */
  const toast = (m, err) => {
    showToast((err ? '⚠️ ' : '') + m);
    const t = document.body.lastElementChild;
    if (!t || !t.style || t.style.position !== 'fixed') return;
    t.classList.add('mk-toast');
    /* empilha: sem isto o segundo recado nasce em cima do primeiro e o esconde */
    const empilha = () => {
      const vivos = [...document.querySelectorAll('.mk-toast')];
      let y = 86;
      for (let i = vivos.length - 1; i >= 0; i--) { vivos[i].style.bottom = y + 'px'; y += vivos[i].offsetHeight + 8; }
    };
    empilha();
    const obs = setInterval(() => { if (!document.contains(t)) { clearInterval(obs); empilha(); } }, 400);
    setTimeout(() => clearInterval(obs), 12000);
  };
  const primeiroNome = id => (person(id).name || '—').split(' ')[0];

  /* ---------------- estado ---------------- */
  const M = { cats: [], canais: [], datas: [], pecas: [], rotina: [], feitos: [], pronto: false };
  let mesCal = (() => { const d = new Date(); return { y: d.getFullYear(), m: d.getMonth() }; })();
  let verInicio = false, escondidos = new Set(), pilha = [], cronoMes = false;

  const ESTAGIOS = [
    { id: 'ideia', label: 'Ideia', cor: '#898781', desc: 'Pauta ainda sem produção. Entra no calendário se tiver data-alvo.' },
    { id: 'prod', label: 'Em produção', cor: '#e0920a', desc: 'Peça sendo feita. Aparece no cronograma de produção.' },
    { id: 'rev', label: 'Revisão', cor: '#ec835a', desc: 'Esperando o gerente aprovar ou reprovar.' },
    { id: 'aprov', label: 'Aprovado', cor: '#2976d4', desc: 'Aprovada e agendada. Alguém confirma quando for ao ar.' },
    { id: 'pub', label: 'Publicado', cor: '#0a8a0a', desc: 'Já está no ar. Recebe a data de conclusão automaticamente.' }
  ];
  const estagio = id => ESTAGIOS.find(s => s.id === id) || ESTAGIOS[0];
  const PALETA = ['#2a78d6', '#1baf7a', '#eda100', '#008300', '#4a3aa7', '#e34948', '#e87ba4', '#eb6834', '#d03b3b', '#9085e9', '#d55181', '#199e70'];

  const ICONES = {
    instagram: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z',
    youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    tiktok: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
    facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
    pinterest: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
    whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z',
    shopee: 'M12.0018 0C9.24 0 6.9945 2.2455 6.9945 5.0072v.4322H2.5137a.4989.4989 0 0 0-.4986.5177l.7124 17.5088A.4989.4989 0 0 0 3.226 24h17.548a.4989.4989 0 0 0 .4985-.5341l.7124-17.5088a.4989.4989 0 0 0-.4986-.5177h-4.4808v-.4322C17.0055 2.2455 14.76 0 12.0018 0Zm0 1.5c1.9341 0 3.5037 1.5696 3.5037 3.5072v.4322H8.4982V5.0072c0-1.9376 1.5695-3.5072 3.5036-3.5072Zm-.0025 7.7c2.3078 0 4.1793 1.1793 4.1793 2.9297 0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75c0-.7852-1.1258-1.4297-2.6793-1.4297s-2.6793.6445-2.6793 1.4297c0 .5714.5236.9678 2.0518 1.4062l.8281.2334c2.2793.6543 3.3287 1.4785 3.3287 3.0107 0 1.8438-1.9297 3.0489-4.4297 3.0489s-4.4297-1.2051-4.4297-3.0489c0-.4142.3358-.75.75-.75s.75.3358.75.75c0 .9199 1.3164 1.5489 2.9297 1.5489s2.9297-.629 2.9297-1.5489c0-.6875-.5762-1.1191-2.2334-1.5947l-.834-.2354c-2.0293-.582-3.0908-1.4111-3.0908-2.8203 0-1.7504 1.8715-2.9297 4.1793-2.9297Z'
  };

  const catDe = id => M.cats.find(c => c.id === id) || { id: null, nome: 'Sem categoria', cor: '#898781', etapas: [] };
  const canalDe = id => M.canais.find(c => c.id === id) || { id, nome: '—', cor: '#898781', icon: '', letra: '?' };
  const pecaDe = num => M.pecas.find(p => p.num === num);
  const dataDe = id => M.datas.find(d => d.id === id);

  /* Os canais usam a cor da marca deles (Mercado Livre amarelo, Kwai laranja,
     WhatsApp verde...). Texto branco em cima de amarelo da 1,87:1 - ilegivel.
     Escolhe preto ou branco pelo que contrastar melhor com aquela cor. */
  function tintaSobre(hex) {
    const h = String(hex || '').trim().replace(/^#/, '');
    /* nome de cor, rgb(), var() ou vazio caem no escuro: branco e a pior aposta */
    if (!/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(h)) return '#111';
    const p = h.length === 3 ? h.split('').map(x => x + x) : [h.slice(0,2), h.slice(2,4), h.slice(4,6)];
    const f = v => { v = parseInt(v, 16) / 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
    const L = 0.2126*f(p[0]) + 0.7152*f(p[1]) + 0.0722*f(p[2]);
    return (1.05/(L+0.05)) >= ((L+0.05)/0.0555) ? '#fff' : '#111';   /* 0.0555 = luminancia real do #111 */
  }
  function icone(id, cls) {
    const c = canalDe(id), p = ICONES[c.icon];
    const dentro = p ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + p + '"/></svg>'
      : '<span class="lt">' + esc(c.letra || (c.nome || '?')[0]) + '</span>';
    return '<span class="ci ' + (cls || '') + '" style="background:' + c.cor + ';--tinta:' + tintaSobre(c.cor) + '" title="' + esc(c.nome) + '" aria-label="' + esc(c.nome) + '">' + dentro + (c.badge ? '<span class="bd">' + esc(c.badge) + '</span>' : '') + '</span>';
  }

  /* ---------------- permissões (espelham a RLS e a trigger) ---------------- */
  const ehAprovador = () => ['admin', 'gerente', 'gerente_mkt'].includes(myLevel);
  const meuSetor = () => { const p = DB.people.find(x => x.id === currentUser); return (p && p.setor) || ''; };
  const podeEditar = () => ehAprovador() || meuSetor().trim().toLowerCase() === 'marketing';
  const ehMkt = p => String(p.setor || '').trim().toLowerCase() === 'marketing' || p.level === 'gerente_mkt';

  /* ---------------- regras de negócio ---------------- */
  const atrasada = p => p.stage !== 'pub' && p.stage !== 'ideia' && !!p.pub && p.pub < hoje();
  const ideiaVencida = p => p.stage === 'ideia' && !!p.pub && p.pub < hoje();
  const vaiAoArHoje = p => p.stage === 'aprov' && p.pub === hoje();
  const dataDoCal = p => p.stage === 'pub' ? (p.pubReal || p.pub) : p.pub;
  const etapasProd = p => p.etapas.filter(e => e.fase === 'prod');
  const etapasPos = p => p.etapas.filter(e => e.fase === 'pos');
  const pastaDrive = p => String(p.num).padStart(3, '0') + ' - ' + p.title;

  const chaveMes = () => mesCal.y + '-' + pad2(mesCal.m + 1);
  const nomeMes = () => cap(new Date(mesCal.y, mesCal.m, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }));
  const noMes = s => !!s && s.slice(0, 7) === chaveMes();
  const mesAtual = () => chaveMes() === hoje().slice(0, 7);
  const buscaBate = p => { const s = (searchTerm || '').replace('#', ''); if (!s) return true; return p.title.toLowerCase().includes(s) || String(p.num) === s || (p.desc || '').toLowerCase().includes(s); };
  const pecasDoMes = () => M.pecas.filter(p => noMes(p.pub) || noMes(p.pubReal) || !p.pub || atrasada(p) || ideiaVencida(p));
  const pecasVisiveis = () => pecasDoMes().filter(buscaBate);
  const ordena = (a, b) => (a.pub || '9999') < (b.pub || '9999') ? -1 : (a.pub || '9999') > (b.pub || '9999') ? 1 : a.num - b.num;
  const corSuave = raw => 'background:color-mix(in srgb,' + raw + ' 14%,var(--surface-1));color:color-mix(in srgb,' + raw + ' 60%,var(--text-1))';
  const tagEstagio = p => { const s = estagio(p.stage), ov = atrasada(p); return '<span class="tag" style="' + (ov ? 'background:var(--crit-wash);color:var(--critical-ink)' : corSuave(s.cor)) + '"><span class="dot" style="background:' + (ov ? 'var(--critical)' : s.cor) + '"></span>' + (ov ? 'Atrasada' : s.label) + '</span>'; };

  /* ---------------- carregar ---------------- */
  async function carregar() {
    if (!sb || !currentUser) return;
    const semana8 = somaDias(segundaDe(hoje()), -56);
    const [ct, cn, dt, pc, pcc, et, lk, ri, rf, pf, nt] = await Promise.all([
      sb.from('mkt_categorias').select('*').order('pos'),
      sb.from('mkt_canais').select('*').order('pos'),
      sb.from('mkt_datas').select('*').order('data'),
      sb.from('mkt_pecas').select('*').order('num'),
      sb.from('mkt_peca_canais').select('*'),
      sb.from('mkt_etapas').select('*').order('pos'),
      sb.from('mkt_links').select('*').order('pos'),
      sb.from('mkt_rotina_itens').select('*').eq('active', true).order('pos'),
      sb.from('mkt_rotina_feitos').select('*').gte('semana', semana8),
      sb.from('profiles').select('id,setor'),
      sb.from('notifications').select('id,peca_num').eq('user_id', currentUser).order('created_at', { ascending: false }).limit(60)
    ]);
    M.cats = (ct.data || []).map(r => ({ id: r.id, nome: r.nome, cor: r.cor, pos: r.pos, etapas: (r.etapas || []).map(e => [e.t, e.fase]) }));
    M.canais = (cn.data || []).map(r => ({ id: r.id, nome: r.nome, cor: r.cor, icon: r.icon || '', letra: r.letra || '', badge: r.badge || '', tipo: r.tipo, url: r.url || '', pos: r.pos }));
    M.datas = (dt.data || []).map(r => ({ id: r.id, nome: r.nome, date: r.data, tipo: r.tipo, aviso: r.aviso, desc: r.descricao || '' }));
    const canaisPorPeca = {}; (pcc.data || []).forEach(r => { (canaisPorPeca[r.peca_id] = canaisPorPeca[r.peca_id] || []).push(r.canal_id); });
    const etapasPorPeca = {}; (et.data || []).forEach(r => { (etapasPorPeca[r.peca_id] = etapasPorPeca[r.peca_id] || []).push({ id: r.id, t: r.titulo, fase: r.fase, done: r.done, doneBy: r.done_by, doneAt: r.done_at, resp: r.resp_id, date: r.data || '', pos: r.pos }); });
    const linksPorPeca = {}; (lk.data || []).forEach(r => { (linksPorPeca[r.peca_id] = linksPorPeca[r.peca_id] || []).push({ id: r.id, desc: r.descricao || '', url: r.url }); });
    M.pecas = (pc.data || []).map(r => ({
      id: r.id, num: r.num, title: r.titulo, desc: r.descricao || '', cat: r.categoria_id, stage: r.stage,
      resp: r.resp_id, revisor: r.revisor_id, pub: r.pub || '', prodStart: r.prod_start || '', concl: r.concl || '',
      pubReal: r.pub_real || '', dataId: r.data_id, drive: r.drive_url || '', reprov: r.reprov,
      createdBy: r.created_by, createdAt: r.created_at,
      canais: canaisPorPeca[r.id] || [], etapas: etapasPorPeca[r.id] || [], links: linksPorPeca[r.id] || []
    }));
    M.rotina = (ri.data || []).map(r => ({ id: r.id, dia: r.dia, titulo: r.titulo, resp: r.resp_id, pos: r.pos }));
    M.feitos = (rf.data || []).map(r => ({ item: r.item_id, semana: r.semana, by: r.done_by, at: r.done_at }));
    const setores = {}; (pf.data || []).forEach(r => { setores[r.id] = r.setor || ''; });
    DB.people.forEach(p => { p.setor = setores[p.id] || ''; });
    const pecaDaNotif = {}; (nt.data || []).forEach(r => { if (r.peca_num) pecaDaNotif[r.id] = r.peca_num; });
    (DB.notifs || []).forEach(n => { n.peca = pecaDaNotif[n.id] || null; });
    M.pronto = true;
  }

  /* ---------------- escrita ---------------- */
  async function exec(promessa, ok) {
    const r = await promessa;
    if (r && r.error) { toast((r.error.message || 'sem permissão').replace(/^.*?:\s*/, ''), 1); return null; }
    if (ok) toast(ok);
    return r ? r.data : true;
  }
  async function recarregar() {
    await carregar();
    /* Se um modal de peça está aberto, o rascunho dele é de antes da gravação.
       Sem isto, marcar ✓ grava e a tela não muda — e o segundo clique desmarca. */
    const c = window._pecaCtx;
    if (c && c.p) {
      const fresca = pecaDe(c.p.num);
      if (fresca) {
        c.p = fresca;
        const x = c.rascunho;
        ['stage', 'prodStart', 'concl', 'pubReal', 'reprov', 'num', 'id'].forEach(k => { x[k] = fresca[k]; });
        x.etapas.forEach(e => {
          const f = fresca.etapas.find(y => y.id === e.id);
          if (f) { e.done = f.done; e.doneBy = f.doneBy; e.doneAt = f.doneAt; }
        });
      } else { c.p = null; }
    }
    renderView(); renderNav(); atualizarModal();
  }
  async function hist(pecaId, texto) {
    if (!texto) return;
    await sb.from('mkt_historico').insert({ peca_id: pecaId, by_id: currentUser, texto: texto.slice(0, 400) });
  }
  async function avisar(p, texto) {
    try {
      const destinos = new Set([p.resp, p.createdBy, p.revisor].filter(Boolean));
      if (!p.revisor && (p.stage === 'rev')) DB.people.filter(x => ['admin', 'gerente', 'gerente_mkt'].includes(x.level)).forEach(x => destinos.add(x.id));
      destinos.delete(currentUser);
      const linhas = [...destinos].map(uid => ({ user_id: uid, actor_id: currentUser, text: texto, peca_num: p.num }));
      if (linhas.length) await sb.from('notifications').insert(linhas);
    } catch (e) { }
  }

  /* ---------------- navegação ---------------- */
  PAGES.splice(5, 0, { id: 'marketing', ic: '📣', label: 'Marketing' });
  TITLES.marketing = ['Marketing', 'Conteúdo, campanhas e publicações'];
  PRIMARY.marketing = 'Nova peça';
  if (!LEVELS.some(l => l.id === 'gerente_mkt')) LEVELS.splice(2, 0, { id: 'gerente_mkt', label: 'Gerente de marketing', color: '#c2185b', bg: '#fbe4ee' });

  const _loadAll = loadAll;
  window.loadAll = async function () { await _loadAll(); try { await carregar(); } catch (e) { console.warn('[marketing]', e); } };

  const _renderView = renderView;
  window.renderView = function () {
    if (route !== 'marketing') {
      const b0 = $('#search'); if (b0) b0.placeholder = 'Buscar tarefas...';
      /* o display inline abaixo é nosso; se ficar, o membro perde o botão
         "＋ Nova tarefa" em TODAS as telas até dar F5. */
      const pb0 = $('#primaryBtn'); if (pb0) pb0.style.display = '';
      _renderView(); return;
    }
    $('#pageTitle').textContent = 'Marketing';
    $('#pageSub').textContent = 'Conteúdo, campanhas e publicações';
    $('#primaryLabel').textContent = 'Nova peça';
    document.body.dataset.route = 'marketing';
    const bs = $('#search'); if (bs) bs.placeholder = 'Buscar peça...';
    const pb = $('#primaryBtn'); if (pb) pb.style.display = podeEditar() ? '' : 'none';
    $('#view').innerHTML = telaMarketing();
    ligarArrasto();
  };

  const _renderNav = renderNav;
  window.renderNav = function () {
    _renderNav();
    const pb = $('#primaryBtn'); if (pb && route === 'marketing') pb.style.display = podeEditar() ? '' : 'none';
    const n = M.pecas.filter(p => p.stage === 'rev').length + M.pecas.filter(atrasada).length;
    const b = [...document.querySelectorAll('#nav button')].find(x => x.textContent.trim().startsWith('Marketing'));
    if (b && n) b.insertAdjacentHTML('beforeend', '<span class="badge">' + n + '</span>');
  };

  const _viewPainel = viewPainel;
  window.viewPainel = function () { return _viewPainel() + cartaoPainel(); };

  const _primaryAction = primaryAction;
  window.primaryAction = function () { if (route === 'marketing') return abrirPeca(null); _primaryAction(); };

  const _onSearch = onSearch;
  window.onSearch = function (v) { if (route === 'marketing') { searchTerm = v.toLowerCase().trim(); renderView(); return; } _onSearch(v); };

  const _go = go;
  window.go = function (r) { pilha = []; _go(r); };

  /* ---------------- temas: claro, escuro e rosa ---------------- */
  const TEMAS = [{ id: 'light', label: 'Claro', ic: '☀️' }, { id: 'dark', label: 'Escuro', ic: '🌙' }, { id: 'rosa', label: 'Rosa', ic: '🌸' }];
  window.currentTheme = function () { return document.documentElement.getAttribute('data-theme') || ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'); };
  window.applyTheme = function (t) {
    if (!TEMAS.some(x => x.id === t)) t = 'light';
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('ng-theme', t); } catch (e) { }
    const prox = TEMAS[(TEMAS.findIndex(x => x.id === t) + 1) % TEMAS.length];
    const b = $('#themeBtn');
    if (b) { b.textContent = prox.ic; b.title = 'Tema ' + TEMAS.find(x => x.id === t).label.toLowerCase() + ' — clique para ' + prox.label.toLowerCase(); }
  };
  window.toggleTheme = function () { const prox = TEMAS[(TEMAS.findIndex(x => x.id === currentTheme()) + 1) % TEMAS.length]; applyTheme(prox.id); toast('Tema ' + prox.label.toLowerCase()); };
  window.proximoTema = function () { const p = TEMAS[(TEMAS.findIndex(x => x.id === currentTheme()) + 1) % TEMAS.length]; return { ic: p.ic, label: p.label.toLowerCase() }; };
  const _renderMoreSheet = typeof renderMoreSheet === 'function' ? renderMoreSheet : null;
  if (_renderMoreSheet) window.renderMoreSheet = function () {
    _renderMoreSheet();
    /* o menu "Mais" do celular tem a lista de páginas fixa no index.html;
       sem isto a aba Marketing não existiria no telefone. */
    const sh = document.getElementById('msheet');
    if (sh && !sh.querySelector('[data-mkt-item]')) {
      const alvo = [...sh.querySelectorAll('.msheet-item')].find(x => /tema/i.test(x.textContent));
      const b = document.createElement('button');
      b.className = 'msheet-item' + (route === 'marketing' ? ' on' : '');
      b.setAttribute('data-mkt-item', '1');
      b.onclick = () => go('marketing');
      b.innerHTML = '<span class="msi">📣</span>Marketing<span class="msar">›</span>';
      if (alvo) sh.insertBefore(b, alvo); else sh.appendChild(b);
    }
    const prox = TEMAS[(TEMAS.findIndex(x => x.id === currentTheme()) + 1) % TEMAS.length];
    const it = [...document.querySelectorAll('#msheet .msheet-item')].find(x => /tema/i.test(x.textContent));
    if (it) { const ic = it.querySelector('.msi'); if (ic) ic.textContent = prox.ic; it.childNodes.forEach(n => { if (n.nodeType === 3 && /tema/i.test(n.textContent)) n.textContent = 'Mudar para tema ' + prox.label.toLowerCase(); }); }
  };
  try { const t = localStorage.getItem('ng-theme'); if (TEMAS.some(x => x.id === t)) applyTheme(t); else applyTheme(currentTheme()); } catch (e) { }

  const _renderTabs = typeof renderTabs === 'function' ? renderTabs : null;
  if (_renderTabs) window.renderTabs = function () {
    _renderTabs();
    if (route !== 'marketing') return;
    const tb = document.getElementById('mtabs'); if (!tb) return;
    const mais = [...tb.querySelectorAll('.mtab')].pop();
    if (mais) mais.classList.add('on');
    /* o "+" da barra de baixo é fixo no index.html e abre "Nova tarefa";
       dentro do Marketing ele tem que criar uma PEÇA. */
    const fab = tb.querySelector('.mfab');
    if (fab) {
      if (!podeEditar()) { fab.style.display = 'none'; return; }
      fab.style.display = '';
      fab.setAttribute('onclick', 'primaryAction()');
      fab.title = 'Nova peça de marketing';
    }
  };

  /* ---------------- notificações com peça ---------------- */
  /* o relTime do sistema espera número; created_at chega como texto e virava "NaNd" */
  const quando = v => { const t = typeof v === 'number' ? v : Date.parse(v); return isFinite(t) ? relTime(t) : ''; };
  window.toggleNotifPanel = function () {
    let p = document.getElementById('notifPanel');
    if (!p) { p = document.createElement('div'); p.id = 'notifPanel'; document.body.appendChild(p); }
    if (p.style.display === 'block') { p.style.display = 'none'; return; }
    const lista = DB.notifs || [];
    p.innerHTML = '<div class="np-head">🔔 Notificações</div>' + (lista.length ? lista.map(n =>
      '<div class="np-item ' + (n.read ? '' : 'unread') + '" onclick="closeNotifPanel();' +
      (n.peca ? 'MK.abrirDoAviso(' + n.peca + ')' : n.task ? "openTaskModal('" + n.task + "')" : "go('mural')") + '">' +
      '<div>' + esc(n.text) + '</div><small>' + quando(n.at) + '</small></div>').join('')
      : '<div class="np-empty">Nenhuma notificação ainda.</div>');
    p.style.display = 'block';
    markNotifsRead();
  };

  /* ---------------- Equipe: setor no cadastro ---------------- */
  const SETORES = ['', 'Marketing', 'Diretoria', 'Gestão', 'Departamento Pessoal', 'Atendimento', 'Produção', 'Compras', 'Financeiro'];
  window.openMemberModal = function (id) {
    const p = DB.people.find(x => x.id === id); if (!p) return;
    window._medit = id;
    const podeSetor = isManager();
    $('#modal').className = 'modal';
    $('#modal').innerHTML =
      '<div class="modal-head"><h3>Editar dados</h3><div class="grow"></div><button class="icon-btn" onclick="closeModal()" aria-label="Fechar">✕</button></div>' +
      '<div class="field"><label>Nome</label><input id="f_mname" value="' + esc(p.name) + '"></div>' +
      '<div class="field"><label>Função (cargo)</label><input id="f_mrole" placeholder="Ex: Auxiliar administrativo" value="' + esc(p.role) + '"></div>' +
      '<div class="field"><label>Setor</label>' + (podeSetor
        ? '<select id="f_msetor">' + SETORES.map(s => '<option value="' + s + '" ' + ((p.setor || '') === s ? 'selected' : '') + '>' + (s || '— sem setor —') + '</option>').join('') + '</select>' +
        '<div class="note-sm" style="margin-top:6px">Quem está no setor <b>Marketing</b> pode criar e editar peças na aba Marketing.</div>'
        : '<input value="' + esc(p.setor || '—') + '" disabled>') + '</div>' +
      '<div class="modal-foot"><button class="btn ghost" onclick="closeModal()">Cancelar</button><button class="btn" onclick="saveMember()">Salvar alterações</button></div>';
    $('#overlay').classList.add('open'); setTimeout(() => foco('#f_mname'), 50);
  };
  window.saveMember = async function () {
    const id = window._medit; if (!id) return;
    const name = $('#f_mname').value.trim(), role = $('#f_mrole').value.trim();
    if (!name) { $('#f_mname').style.borderColor = 'var(--critical)'; return; }
    const { error } = await sb.from('profiles').update({ name, role }).eq('id', id);
    if (error) { toast('Sem permissão para editar este cadastro.', 1); return; }
    /* 'setor' vale permissão no Marketing, então não sai pelo update comum:
       o banco tirou a coluna do grant e só esta função (que confere quem chama)
       escreve nela. Ver migração mkt_09_rpc_definir_setor. */
    const sel = $('#f_msetor');
    if (sel) {
      const antes = (DB.people.find(x => x.id === id) || {}).setor || '';
      if ((sel.value || '') !== antes) {
        const rs = await sb.rpc('definir_setor', { alvo: id, novo: sel.value || null });
        if (rs && rs.error) { toast('Nome e função salvos, mas o setor não: ' + (rs.error.message || 'sem permissão'), 1); await reload(); return; }
      }
    }
    closeModal(); toast('Dados atualizados.'); await reload();
  };

  /* ================= TELA ================= */
  function telaMarketing() {
    const lista = pecasVisiveis();
    /* A rotina vem logo depois do calendario: e a lista do que fazer em cada dia
       da semana, entao e o que a pessoa precisa ver primeiro ao abrir a tela.
       Depois vem o pipeline (em que pe esta cada peca) e o cronograma (as etapas). */
    return avisosHtml() + barraMesHtml() + buscaHtml(lista) + indicadoresHtml(lista) +
      calendarioHtml() + rotinaHtml() + pipelineHtml(lista) + cronogramaHtml() + cadastrosHtml();
  }

  function buscaHtml(lista) {
    if (!searchTerm) return '';
    const fora = M.pecas.filter(p => buscaBate(p) && !lista.includes(p) && p.pub);
    const meses = [...new Set(fora.map(p => p.pub.slice(0, 7)))];
    return '<div class="note-sm" style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span>Mostrando só o que bate com <b>“' + esc(searchTerm) + '”</b> — ' + lista.length + ' peça' + (lista.length !== 1 ? 's' : '') + ' neste mês. Os números abaixo são só da busca.</span>' +
      meses.map(mk => '<button class="fchip" onclick="MK.irParaMes(' + (+mk.slice(0, 4)) + ',' + (+mk.slice(5, 7) - 1) + ')">' + fora.filter(p => p.pub.slice(0, 7) === mk).length + ' em ' + cap(new Date(mk + '-15T12:00:00').toLocaleDateString('pt-BR', { month: 'long' })) + '</button>').join('') +
      '<button class="fchip" onclick="MK.limparBusca()">Limpar busca</button></div>';
  }

  function avisosHtml() {
    const prox = M.datas.filter(d => d.aviso && faltam(d.date) >= 0 && faltam(d.date) <= 30).sort((a, b) => a.date < b.date ? -1 : 1);
    if (!prox.length) return '';
    return '<div class="mk-alerts">' + prox.map(d => {
      const n = faltam(d.date), lig = M.pecas.filter(p => p.dataId === d.id);
      const pend = lig.filter(p => p.stage !== 'pub' && p.stage !== 'aprov').length, semCanal = lig.filter(p => !p.canais.length).length;
      return '<button class="mk-alert ' + (n === 0 ? 'hoje' : '') + '" onclick="MK.abrirData(\'' + d.id + '\')">' +
        '<span class="mk-al-days ' + (n === 0 ? 'now' : d.tipo === 'promocao' ? 'promo' : 'comem') + '">' + (n === 0 ? 'HOJE' : n) + '<small>' + (n === 0 ? '' : n === 1 ? 'DIA' : 'DIAS') + '</small></span>' +
        '<span class="mk-al-info"><span class="mk-al-name">' + esc(d.nome) + ' · ' + dm(d.date) + '</span><span class="mk-al-sub">' +
        (lig.length ? lig.length + ' peça' + (lig.length > 1 ? 's' : '') + ' ligada' + (lig.length > 1 ? 's' : '') +
          (pend ? ' · <b>' + pend + ' ainda não aprovada' + (pend > 1 ? 's' : '') + '</b>' : '') +
          (semCanal ? ' · <b>' + semCanal + ' sem canal</b>' : '') : '<b>nenhuma peça ligada ainda</b>') +
        '</span></span></button>';
    }).join('') + '</div>';
  }

  function barraMesHtml() {
    return '<div class="mk-monthbar"><div class="mk-mnav"><button onclick="MK.mes(-1)" aria-label="Mês anterior">‹</button><h2>' + nomeMes() + '</h2><button onclick="MK.mes(1)" aria-label="Próximo mês">›</button></div>' +
      (mesAtual() ? '' : '<button class="fchip" onclick="MK.mesHoje()">Voltar para hoje</button>') +
      '<span class="mk-hint">Só peças com publicação neste mês. Atrasadas e sem data aparecem sempre.</span><div class="grow"></div>' +
      '<button class="fchip" onclick="MK.abrirCadastros(\'categorias\')">Cadastros</button>' +
      (podeEditar() ? '<button class="fchip" onclick="MK.abrirData(null)">＋ Data comemorativa</button>' : '') + '</div>';
  }

  function indicadoresHtml(lista) {
    const c = id => lista.filter(p => p.stage === id);
    const ideias = c('ideia'), semData = ideias.filter(p => !p.pub).length, venc = ideias.filter(ideiaVencida).length;
    const prod = c('prod'), rej = prod.filter(p => p.reprov).length;
    const totalProd = M.pecas.filter(p => p.stage === 'prod').length;
    const rev = c('rev'), meu = rev.filter(p => p.revisor === currentUser).length;
    const aprov = c('aprov'), hj = aprov.filter(vaiAoArHoje).length;
    const pub = c('pub'), late = lista.filter(atrasada);
    const lateA = late.filter(p => p.stage === 'aprov').length, lateP = late.length - lateA;
    const t = (label, val, pe, cor, bad, fn, dica) => '<button class="mk-kpi ' + (bad ? 'bad' : '') + '" style="--kc:' + cor + '" onclick="' + fn + '" title="' + esc(dica || (label + ': ' + val + (pe ? ' — ' + String(pe).replace(/<[^>]+>/g, '') : ''))) + '"><span class="k-label">' + label + '</span><span class="k-val">' + val + '</span><span class="k-foot">' + (searchTerm ? 'na busca' : pe) + '</span></button>';
    return '<div class="mk-kpis">' +
      t('Ideias', ideias.length, [semData ? semData + ' sem data' : '', venc ? '<b>' + venc + ' vencida' + (venc > 1 ? 's' : '') + '</b>' : ''].filter(Boolean).join(' · ') || 'todas com data', '#898781', 0, "MK.lista('ideia')") +
      t('Em produção', prod.length, rej ? '<b>' + rej + ' reprovada' + (rej > 1 ? 's' : '') + '</b>' : (totalProd > prod.length ? totalProd + ' no total' : 'nenhuma reprovada'), '#e0920a', 0, "MK.lista('prod')",
        'Em produção com publicação em ' + mesNome(mesCal.m) + ': ' + prod.length + '. Em produção ao todo, contando os outros meses: ' + totalProd + '. O cronograma abaixo mostra as ' + totalProd + '.') +
      t('Em revisão', rev.length, meu ? '<b>' + meu + ' esperando você</b>' : 'aguardando gerente', '#ec835a', 0, "MK.lista('rev')") +
      t('Aprovadas', aprov.length, hj ? hj + ' vai ao ar hoje' : 'agendadas', '#2a78d6', 0, "MK.lista('aprov')") +
      t('Publicadas', pub.length, (pub.filter(p => !p.pubReal && !p.pub).length ? pub.filter(p => !p.pubReal && !p.pub).length + ' sem data' : 'no mês'), '#0ca30c', 0, "MK.lista('pub')",
        'Publicadas com data em ' + mesNome(mesCal.m) + ' (a data real, ou a planejada quando não há real).') +
      t('Atrasadas', late.length, late.length ? [lateA ? lateA + ' sem confirmar' : '', lateP ? lateP + ' ainda não aprovada' + (lateP > 1 ? 's' : '') : ''].filter(Boolean).join(' · ') : 'tudo em dia', '#d03b3b', late.length > 0, "MK.lista('late')") +
      '</div>';
  }

  /* ---------- calendário ---------- */
  function estrela() { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.8L12 17.7 6 21l1.3-6.8-5-4.7 6.8-.8z"/></svg>'; }
  function pilula(p) {
    const s = estagio(p.stage), late = atrasada(p), hj = vaiAoArHoje(p);
    return '<div class="mk-ev ' + (p.stage === 'ideia' ? 'ideia' : '') + ' ' + (late ? 'late' : '') + ' ' + (hj ? 'hoje' : '') + '" draggable="' + (podeEditar() && p.stage !== 'pub') + '" data-num="' + p.num + '" style="' + (p.stage === 'ideia' ? '' : corSuave(s.cor)) + '" onclick="event.stopPropagation();MK.abrirPeca(' + p.num + ')" tabindex="0" role="button" onkeydown="if(event.key===\'Enter\'){event.stopPropagation();MK.abrirPeca(' + p.num + ')}" title="#' + p.num + ' ' + esc(p.title) + ' — ' + (late ? 'atrasada' : s.label) + '"><span class="n">#' + p.num + '</span><span class="tt">' + esc(p.title) + '</span></div>';
  }
  function calendarioHtml() {
    const y = mesCal.y, m = mesCal.m, dias = new Date(y, m + 1, 0).getDate(), t = hoje();
    const lead = (new Date(y, m, 1).getDay() + 6) % 7, cells = [];
    for (let i = lead; i > 0; i--) { const d = new Date(y, m, 1 - i); cells.push({ out: 1, d: d.getDate(), date: isoOf(d) }); }
    for (let d = 1; d <= dias; d++) cells.push({ d, date: y + '-' + pad2(m + 1) + '-' + pad2(d) });
    while (cells.length % 7) { const d = new Date(y, m + 1, cells.length - lead - dias + 1); cells.push({ out: 1, d: d.getDate(), date: isoOf(d) }); }
    const base = M.pecas.filter(buscaBate);
    const semData = M.pecas.filter(p => p.stage === 'ideia' && !p.pub).length, venc = M.pecas.filter(ideiaVencida).length;
    const legenda = ESTAGIOS.map(s => '<button class="lg ' + (escondidos.has(s.id) ? 'off' : '') + '" onclick="MK.alternarEstagio(\'' + s.id + '\')" title="' + (escondidos.has(s.id) ? 'Escondido — clique para mostrar' : 'Clique para esconder este estágio do calendário') + '"><i class="dot ' + (s.id === 'ideia' ? 'dash' : '') + '" style="' + (s.id === 'ideia' ? '' : 'background:' + s.cor) + '"></i>' + s.label + '</button>').join('') +
      '<span class="lg" title="Data de publicação passou sem publicar"><i class="dot" style="background:#d03b3b"></i>Atrasada</span>';
    const cel = c => {
      const evs = base.filter(p => dataDoCal(p) === c.date && !escondidos.has(p.stage)).sort((a, b) => ESTAGIOS.findIndex(s => s.id === b.stage) - ESTAGIOS.findIndex(s => s.id === a.stage));
      const dts = M.datas.filter(d => d.date === c.date);
      const ini = verInicio ? base.filter(p => p.prodStart === c.date && p.stage !== 'ideia') : [];
      const max = c.out ? 2 : (dts.length ? 2 : 3);
      return '<div class="mk-cell ' + (c.out ? 'out' : '') + ' ' + (c.date === t ? 'today' : '') + ' ' + (c.wk ? 'wknd' : '') + '" data-date="' + c.date + '" onclick="MK.abrirDia(\'' + c.date + '\')" role="button" tabindex="0" onkeydown="if(event.key===\'Enter\')MK.abrirDia(\'' + c.date + '\')" aria-label="' + porExtenso(c.date) + '"><span class="dn">' + c.d + '</span>' +
        dts.map(d => '<div class="mk-date ' + (d.tipo === 'promocao' ? 'promo' : '') + '" onclick="event.stopPropagation();MK.abrirData(\'' + d.id + '\')" title="' + esc(d.nome) + '">' + estrela() + '<span>' + esc(d.nome) + '</span></div>').join('') +
        evs.slice(0, max).map(pilula).join('') +
        (evs.length > max ? '<div class="mk-more" onclick="event.stopPropagation();MK.abrirDia(\'' + c.date + '\')">+' + (evs.length - max) + ' mais</div>' : '') +
        ini.slice(0, evs.length >= max ? 0 : 2).map(p => '<div class="mk-ev start" onclick="event.stopPropagation();MK.abrirPeca(' + p.num + ')" title="Início de produção: #' + p.num + ' ' + esc(p.title) + '"><span class="n">▸</span><span class="tt">início #' + p.num + ' ' + esc(p.title) + '</span></div>').join('') +
        '</div>';
    };
    return '<div class="mk-section"><div class="section-title"><h2>Calendário de publicações</h2><span class="st-sub">clique num dia para ver tudo dele' + (podeEditar() ? '<span class="mk-drag-hint"> · arraste uma peça para mudar a data</span>' : '') + '<span class="mk-cal-hint"> · deslize para o lado para ver sexta, sábado e domingo</span></span><div class="grow"></div><div class="mk-legend">' + legenda + '</div>' +
      '<button class="fchip ' + (verInicio ? 'on' : '') + '" onclick="MK.verInicio()">Ver início de produção</button>' +
      (semData || venc ? '<button class="fchip" onclick="MK.lista(\'semdata\')">' + (semData ? semData + ' ideia' + (semData > 1 ? 's' : '') + ' sem data' : '') + (semData && venc ? ' · ' : '') + (venc ? venc + ' com data vencida' : '') + '</button>' : '') + '</div>' +
      (escondidos.size ? '<div class="note-warn" style="margin-bottom:10px">Você escondeu ' + [...escondidos].map(id => estagio(id).label).join(', ') + ' do calendário. <button class="fchip" style="padding:3px 9px" onclick="MK.mostrarTudo()">Mostrar tudo</button></div>' : '') +
      '<div class="mk-cal"><div class="mk-cal-head">' + WD.slice(1).map((d, i) => '<div class="' + (i >= 5 ? 'wknd' : '') + '">' + d + '</div>').join('') + '</div>' +
      '<div class="mk-cal-grid">' + cells.map((c, i) => cel(Object.assign({}, c, { wk: (i % 7) >= 5 }))).join('') + '</div></div></div>';
  }

  /* ---------- pipeline ---------- */
  function pilulaData(p) {
    if (!p.pub) return '<span class="mk-pill warn">sem data</span>';
    const d = dataDoCal(p);
    return '<span class="mk-pill ' + (atrasada(p) ? 'late' : '') + '" title="Publicação ' + (p.stage === 'pub' ? 'real' : 'planejada') + (!noMes(d) ? ' — outro mês' : '') + '">' + (p.stage === 'pub' ? '✓ ' : '') + dm(d) + (!noMes(d) ? ' (' + mesCurto(d) + ')' : '') + '</span>';
  }
  function cardHtml(p) {
    const cat = catDe(p.cat), ps = etapasProd(p), feito = ps.filter(e => e.done).length;
    const late = atrasada(p), hj = vaiAoArHoje(p);
    let faixa = '';
    if (p.reprov && p.stage === 'prod') faixa = '<div class="mk-rej" title="' + esc(p.reprov.motivo || '') + '">Reprovado<span>— ' + esc(p.reprov.motivo || '') + '</span></div>';
    else if (late) faixa = '<div class="mk-late">Atrasada · era ' + dm(p.pub) + '</div>';
    else if (hj) faixa = '<div class="mk-hoje">Vai ao ar hoje</div>';
    let acoes = '';
    if (p.stage === 'rev') acoes = ehAprovador()
      ? '<div class="mk-actions"><button class="btn ok" onclick="event.stopPropagation();MK.aprovar(' + p.num + ')">Aprovar</button><button class="btn danger" onclick="event.stopPropagation();MK.abrirReprovar(' + p.num + ')">Reprovar</button></div>'
      : '<div class="mk-wait">Aguardando ' + (p.revisor ? esc(primeiroNome(p.revisor)) : 'gerente') + ' revisar</div>';
    else if (p.stage === 'aprov' && podeEditar()) acoes = '<div class="mk-actions"><button class="btn ' + (late ? '' : 'ghost') + '" onclick="event.stopPropagation();MK.publicar(' + p.num + ')">Confirmar publicação</button></div>';
    else if (p.stage === 'prod' && podeEditar() && ps.length && feito === ps.length) acoes = '<div class="mk-actions"><button class="btn" onclick="event.stopPropagation();MK.enviarRevisao(' + p.num + ')">Enviar para revisão</button></div>';
    return '<div class="mk-card" draggable="' + podeEditar() + '" data-num="' + p.num + '" onclick="MK.abrirPeca(' + p.num + ')" role="button" tabindex="0" onkeydown="if(event.key===\'Enter\')MK.abrirPeca(' + p.num + ')">' + faixa +
      '<div class="mk-ch"><span class="mk-num">#' + p.num + '</span><span class="mk-cat" title="' + esc(cat.nome) + '" style="' + corSuave(cat.cor) + '">' + esc(cat.nome) + '</span></div>' +
      '<div class="mk-title">' + esc(p.title) + '</div>' +
      '<div class="mk-chan">' + (p.canais.length ? p.canais.map(c => icone(c)).join('') : '<span class="mk-pill" style="color:var(--critical-ink);background:var(--crit-wash)">sem canal</span>') + '</div>' +
      '<div class="mk-foot"><div class="left">' + pilulaData(p) + (p.stage === 'prod' || p.stage === 'rev' ? '<span class="mk-prog" title="Etapas de produção"><i><b style="width:' + (ps.length ? feito / ps.length * 100 : 0) + '%"></b></i>' + feito + '/' + ps.length + '</span>' : '') + '</div>' + avatar(p.resp, 'xs') + '</div>' + acoes + '</div>';
  }
  function pipelineHtml(lista) {
    return '<div class="mk-section"><div class="section-title"><h2>Pipeline <span class="st-sub" style="font-weight:600">(em que pé está cada peça)</span></h2><span class="st-sub">' + (podeEditar() ? '<span class="mk-drag-hint">arraste entre colunas · </span>' : '') + 'contadores clicáveis<span class="mk-toque-hint">, ou abra a peça e mude a etapa por lá</span></span><div class="grow"></div>' +
      (podeEditar() ? '<button class="btn sm" onclick="MK.abrirPeca(null)">＋ Nova peça</button>' : '') + '</div><div class="mk-kanban">' +
      ESTAGIOS.map(s => {
        const itens = lista.filter(p => p.stage === s.id).sort(ordena);
        return '<div class="kcol" style="--sc:' + s.cor + '" data-stage="' + s.id + '"><h3><span class="dot" style="background:' + s.cor + '"></span>' + s.label +
          '<button class="count" onclick="MK.lista(\'' + s.id + '\')" title="' + esc(s.desc) + '">' + itens.length + '</button></h3>' +
          (itens.length ? itens.map(cardHtml).join('') : '<div class="kempty">' + (s.id === 'ideia' ? 'Nenhuma ideia guardada' : 'Nada aqui') + '</div>') +
          (s.id === 'ideia' && podeEditar() ? '<button class="mk-newcard" onclick="MK.abrirPeca(null)">＋ Nova ideia</button>' : '') + '</div>';
      }).join('') + '</div></div>';
  }

  /* ---------- cronograma ---------- */
  /* O mês comanda a página, mas esconder o trabalho de hoje porque a peça publica
     em outubro confunde. Então: mostra tudo por padrão, diz isso na cara, e deixa
     um botão para prender ao mês. Os dois números aparecem sempre. */
  function cronogramaHtml() {
    const emProd = M.pecas.filter(p => p.stage === 'prod' && buscaBate(p));
    const noMesAgora = pecasDoMes();
    const doMes = emProd.filter(p => noMesAgora.some(q => q.num === p.num));
    const itens = (cronoMes ? doMes : emProd).slice().sort(ordena), t = hoje(), ed = podeEditar();
    const fora = emProd.length - doMes.length;
    return '<div class="mk-section"><div class="section-title"><h2>Cronograma de produção</h2><span class="st-sub">o que está em produção agora — ao mudar de coluna a peça sai daqui</span><div class="grow"></div>' +
      (fora ? '<button class="fchip ' + (cronoMes ? 'on' : '') + '" onclick="MK.cronoTudo()">' + (cronoMes ? 'só de ' + mesNome(mesCal.m) + ' (' + doMes.length + ')' : 'todos os meses (' + emProd.length + ')') + '</button>' : '') +
      '<button class="fchip" onclick="MK.lista(\'prod-todas\')">ver as ' + emProd.length + ' de todos os meses</button></div>' +
      (fora && !cronoMes ? '<div class="note-sm" style="margin:-4px 0 10px">' + doMes.length + ' publica' + (doMes.length !== 1 ? 'm' : '') + ' em ' + mesNome(mesCal.m) + ' e ' + fora + ' em outro mês (o mês vem escrito ao lado da data).</div>' : '') +
      (itens.length ? '<div class="mk-cron">' + itens.map(p => {
        const ps = etapasProd(p), feito = ps.filter(e => e.done).length, cat = catDe(p.cat);
        return '<div class="mk-cron-card"><button class="ch" onclick="MK.abrirPeca(' + p.num + ')"><span class="mk-num">#' + p.num + '</span><span class="mk-cat" title="' + esc(cat.nome) + '" style="' + corSuave(cat.cor) + '">' + esc(cat.nome) + '</span><span class="grow"></span>' +
          (p.pub ? '<span class="mk-pill ' + (atrasada(p) ? 'late' : '') + '" title="Publicação planejada">publica ' + dm(p.pub) + (!noMes(p.pub) ? ' (' + mesCurto(p.pub) + ')' : '') + '</span>' : '<span class="mk-pill warn">sem data</span>') + '</button>' +
          (p.reprov ? '<div class="mk-rejbox" style="margin-bottom:8px"><b>Reprovado:</b><span>' + esc(p.reprov.motivo || '') + '</span></div>' : '') +
          '<button class="ct" onclick="MK.abrirPeca(' + p.num + ')">' + esc(p.title) + '</button>' +
          ps.map(e => '<div class="mk-step ' + (e.done ? 'done' : '') + '"><button class="minichk ' + (e.done ? 'on' : '') + '" ' + (ed ? 'onclick="MK.etapa(' + p.num + ',\'' + e.id + '\')"' : 'disabled') + ' role="checkbox" aria-checked="' + e.done + '" aria-label="' + esc(e.t) + '">' + (e.done ? '✓' : '') + '</button>' + (ed ? '<button class="st" onclick="MK.etapa(' + p.num + ',\'' + e.id + '\')" title="Clique para marcar como feita">' + esc(e.t) + '</button>' : '<span class="st">' + esc(e.t) + '</span>') + (e.resp ? avatar(e.resp, 'xs') : '') + '<span class="sd ' + (!e.done && e.date && e.date < t ? 'late' : '') + '">' + (e.date ? dm(e.date) : '') + '</span></div>').join('') +
          '<div class="mk-cron-foot"><span class="mk-prog"><i><b style="width:' + (ps.length ? feito / ps.length * 100 : 0) + '%"></b></i>' + feito + '/' + ps.length + ' etapas</span>' +
          (ed ? (feito === ps.length && ps.length ? '<button class="btn sm" onclick="MK.enviarRevisao(' + p.num + ')">Enviar para revisão</button>' : '<button class="btn ghost sm" onclick="MK.abrirPeca(' + p.num + ')">Abrir peça</button>') : '') + '</div></div>';
      }).join('') + '</div>' : '<div class="mk-empty">Nenhuma peça em produção' + (cronoMes ? ' que publique em ' + mesNome(mesCal.m) : '') + (searchTerm ? ' com essa busca' : '') + '.</div>') + '</div>';
  }

  /* ---------- rotina ---------- */
  const semanaAtual = () => segundaDe(hoje());
  const feitoDe = (item, sem) => M.feitos.find(f => f.item === item && f.semana === (sem || semanaAtual()));
  function rotinaHtml() {
    const td = diaSemana(hoje()), sem = semanaAtual();
    const total = M.rotina.length, feito = M.rotina.filter(i => feitoDe(i.id)).length;
    const pct = total ? Math.round(feito / total * 100) : 0;
    const passada = somaDias(sem, -7);
    const totPassada = M.feitos.filter(f => f.semana === passada).length;
    return '<div class="mk-section"><div class="section-title"><h2>Rotina de marketing</h2><span class="st-sub">do time · zera toda segunda e guarda o histórico<span class="mk-rot-hint"> · deslize para o lado para ver os outros dias</span></span><div class="grow"></div>' +
      '<button class="fchip" onclick="MK.historicoRotina()" title="Semana atual — clique para ver o histórico">' + dm(sem) + ' – ' + dm(somaDias(sem, 6)) + '<span class="mk-rot-bar"><b style="width:' + pct + '%"></b></span>' + feito + '/' + total + ' · ' + pct + '%</button>' +
      (totPassada ? '<button class="fchip" onclick="MK.historicoRotina()">semana passada ' + (total ? Math.round(totPassada / total * 100) : 0) + '%</button>' : '') +
      (podeEditar() ? '<button class="fchip" onclick="MK.editarRotina()">Editar rotina</button>' : '') + '</div>' +
      '<div class="mk-rot">' + [1, 2, 3, 4, 5, 6, 7].map(d => {
        const its = M.rotina.filter(i => i.dia === d), n = its.filter(i => feitoDe(i.id)).length;
        return '<div class="mk-rot-col ' + (d === td ? 'today' : '') + '"><h4>' + WD[d] + '<span>' + (d === td ? '<span class="hj">HOJE</span> ' : '') + n + '/' + its.length + '</span></h4>' +
          (its.length ? its.map(i => { const f = feitoDe(i.id); return '<button class="mk-rot-item ' + (f ? 'done' : '') + (podeEditar() ? '' : ' somente-leitura') + '" ' + (podeEditar() ? 'onclick="MK.rotina(\'' + i.id + '\')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();MK.rotina(\'' + i.id + '\')}"' : 'disabled') + ' role="checkbox" aria-checked="' + !!f + '" title="' + (!podeEditar() ? (f ? 'Feito por ' + esc(person(f.by).name) : 'Só quem é do marketing (ou gerente) marca a rotina') : (f ? 'Feito por ' + esc(person(f.by).name) + ' — clique para desmarcar' : 'Clique para marcar como feito')) + '"><span class="minichk ' + (f ? 'on' : '') + '">' + (f ? '✓' : '') + '</span><span class="rt">' + esc(i.titulo) + '</span>' + (f ? avatar(f.by, 'xs') : (i.resp ? avatar(i.resp, 'xs') : '')) + '</button>'; }).join('') : '<div class="mk-rot-empty">sem itens</div>') + '</div>';
      }).join('') + '</div></div>';
  }

  /* ---------- cadastros ---------- */
  function cadastrosHtml() {
    return '<div class="mk-section"><div class="section-title"><h2>Cadastros</h2><span class="st-sub">categorias com modelo de etapas, canais e datas</span></div><div class="mk-cfg">' +
      '<button class="mk-cfg-card" onclick="MK.abrirCadastros(\'categorias\')"><span class="h"><span>Categorias</span><span class="count">' + M.cats.length + '</span></span><span class="p">Cada categoria traz o modelo de etapas do cronograma.</span><span class="prev">' + M.cats.map(c => '<span class="mk-cat" style="' + corSuave(c.cor) + '">' + esc(c.nome) + '</span>').join('') + '</span></button>' +
      '<button class="mk-cfg-card" onclick="MK.abrirCadastros(\'canais\')"><span class="h"><span>Canais</span><span class="count">' + M.canais.length + '</span></span><span class="p">Redes sociais e marketplaces onde a peça vai ao ar.</span><span class="prev mk-chan">' + M.canais.map(c => icone(c.id, 'big')).join('') + '</span></button>' +
      '<button class="mk-cfg-card" onclick="MK.abrirCadastros(\'datas\')"><span class="h"><span>Datas comemorativas e promoções</span><span class="count">' + M.datas.length + '</span></span><span class="p">Aviso 30 dias antes, no topo e no calendário.</span><span class="prev">' + M.datas.slice().sort((a, b) => a.date < b.date ? -1 : 1).slice(0, 6).map(d => '<span class="mk-pill wrap" onclick="event.stopPropagation();MK.abrirData(\'' + d.id + '\')" role="button" tabindex="0" title="Abrir ' + esc(d.nome) + '">' + dm(d.date) + ' ' + esc(d.nome) + '</span>').join('') + '</span></button>' +
      '</div></div>';
  }

  /* ---------- cartão do Painel ---------- */
  function cartaoPainel() {
    if (!M.pronto) return '';
    const t = hoje(), fim = somaDias(t, 6);
    const semana = M.pecas.filter(p => p.pub && p.pub >= t && p.pub <= fim && p.stage !== 'pub').sort((a, b) => a.pub < b.pub ? -1 : 1);
    const rev = M.pecas.filter(p => p.stage === 'rev').length, prod = M.pecas.filter(p => p.stage === 'prod').length;
    const hj = M.pecas.filter(vaiAoArHoje).length, late = M.pecas.filter(atrasada).length;
    const prox = M.datas.filter(d => faltam(d.date) >= 0 && faltam(d.date) <= 30).sort((a, b) => a.date < b.date ? -1 : 1);
    if (!M.pecas.length && !prox.length) return '';
    return '<div class="chartrow cr-bottom" style="margin-top:16px;order:6"><div class="card pad"><div class="section-title"><h2>📣 Marketing</h2><span class="st-sub">o que vai ao ar nos próximos 7 dias</span><div class="grow"></div><button class="btn ghost sm" onclick="go(\'marketing\')">Abrir aba</button></div>' +
      '<div class="mk-mini-kpis"><span class="mk-mini-lab">no total, de todos os meses:</span><button onclick="go(\'marketing\');MK.lista(\'prod-todas\')"><i class="dot" style="background:#e0920a"></i>' + prod + ' em produção</button>' +
      '<button onclick="go(\'marketing\');MK.lista(\'rev\')"><i class="dot" style="background:#ec835a"></i>' + rev + ' em revisão</button>' +
      (hj ? '<button onclick="go(\'marketing\');MK.lista(\'hoje\')"><i class="dot" style="background:#2a78d6"></i>' + hj + ' vai ao ar hoje</button>' : '') +
      (late ? '<button style="color:var(--critical-ink)" onclick="go(\'marketing\');MK.lista(\'late\')"><i class="dot" style="background:#d03b3b"></i>' + late + ' atrasada' + (late > 1 ? 's' : '') + '</button>' : '') + '</div>' +
      '<div class="mk-mini">' + (semana.length ? semana.map(p => '<button class="row" onclick="go(\'marketing\');MK.abrirPeca(' + p.num + ')"><span class="dt">' + dm(p.pub) + '</span>' + tagEstagio(p) + '<span class="tt">#' + p.num + ' ' + esc(p.title) + '</span><span class="mk-chan">' + p.canais.slice(0, 3).map(c => icone(c)).join('') + '</span></button>').join('') : '<div class="mk-empty">Nada agendado para os próximos 7 dias.</div>') + '</div></div>' +
      '<div class="card pad"><div class="section-title"><h2>Datas próximas</h2></div><div class="mk-mini">' +
      (prox.length ? prox.map(d => '<button class="row" onclick="go(\'marketing\');MK.abrirData(\'' + d.id + '\')"><span class="dt">' + dm(d.date) + '</span><span class="tt">' + esc(d.nome) + '</span><span class="mk-pill">' + (faltam(d.date) === 0 ? 'hoje' : 'em ' + faltam(d.date) + ' d') + '</span></button>').join('') : '<div class="mk-empty">Nenhuma data nos próximos 30 dias.</div>') + '</div></div></div>';
  }

  /* ================= MODAIS ================= */
  function abrirModal(html, tamanho, tipo) {
    const antes = document.activeElement;
    pilha.push({ html, tamanho, tipo: tipo || '', refresh: null, ctx: window._pecaCtx || null, antes });
    const m = $('#modal'); m.className = 'modal' + (tamanho === 'wide' ? ' wide' : '');
    m.innerHTML = html; marcarMeu(); $('#overlay').classList.add('open'); m.scrollTop = 0; focoModal();
  }
  function focoModal() { const m = $('#modal'), h = m.querySelector('#mTitle') || m.querySelector('h3'); if (h) { if (!h.id) h.id = 'mTitle'; h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); m.setAttribute('aria-labelledby', h.id); } }
  /* renomear direto na linha, como o sistema já faz nas subtarefas */
  function renomearInline(sel, valor, max, aoConfirmar) {
    const b = document.querySelector(sel); if (!b) return;
    const inp = document.createElement('input');
    inp.type = 'text'; inp.value = valor; inp.maxLength = max; inp.className = 'st mk-ren';
    b.replaceWith(inp); inp.focus(); inp.select();
    let fim = false;
    const encerra = ok => {
      if (fim) return; fim = true;
      const t = inp.value.trim();
      if (ok && t && t !== valor) aoConfirmar(cortaBonito(t, max)); else atualizarModal();
    };
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); encerra(1); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); encerra(0); }
    });
    inp.addEventListener('blur', () => encerra(1));
  }
  /* Marca dentro do #modal, não no #modal: quando o sistema abre um modal dele
     (openTaskModal e cia.) ele troca o innerHTML e a marca some junto — que é
     exatamente como sabemos que a tela deixou de ser nossa. */
  function marcarMeu() { const m = $('#modal'); if (m && !m.querySelector('i[data-mkt]')) m.insertAdjacentHTML('beforeend', '<i data-mkt hidden></i>'); }
  const ehMeuModal = () => { const m = $('#modal'); return !!(m && m.querySelector('i[data-mkt]')); };
  function definirRefresh(fn) { const t = pilha[pilha.length - 1]; if (t) { t.refresh = fn; t.ctx = window._pecaCtx || null; } }
  /* Registra os campos cujo texto se perde ao fechar. Sem isto, "Cancelar"
     jogava fora o que a pessoa digitou sem perguntar (só a peça perguntava). */
  function definirSujo(seletores, pergunta) {
    const t = pilha[pilha.length - 1]; if (!t) return;
    t.sujo = () => seletores.some(sel => { const e = document.querySelector(sel); return !!(e && String(e.value || '').trim()); });
    t.pergunta = pergunta || 'Descartar o que você digitou?';
  }
  function podeFechar() {
    const t = pilha[pilha.length - 1];
    if (!t || !t.sujo) return true;
    try { if (!t.sujo()) return true; } catch (e) { return true; }
    return confirm(t.pergunta);
  }
  function atualizarModal() { const t = pilha[pilha.length - 1]; if (t && t.refresh && $('#overlay').classList.contains('open')) { const s = $('#modal').scrollTop; t.refresh(); marcarMeu(); $('#modal').scrollTop = s; } }
  function fecharTopo() {
    const t = pilha[pilha.length - 1];
    if (t && t.tipo === 'peca') return cancelarPeca();
    /* editando uma categoria/canal dentro de Cadastros: fechar volta para a lista,
       igual ao botão "Voltar" — não fecha os dois de uma vez. */
    if (t && t.tipo === 'cadastros' && edCfg) { if (cfgSair()) atualizarModal(); return; }
    if (!podeFechar()) return;
    fecharModal();
  }
  function fecharModal() {
    const f = pilha.pop();
    if (pilha.length) {
      const t = pilha[pilha.length - 1], m = $('#modal');
      m.className = 'modal' + (t.tamanho === 'wide' ? ' wide' : '');
      window._pecaCtx = t.ctx || null;
      if (t.refresh) t.refresh(); else m.innerHTML = t.html;
      marcarMeu(); focoModal();
    } else {
      $('#overlay').classList.remove('open'); $('#modal').innerHTML = ''; $('#modal').className = 'modal'; window._pecaCtx = null;
      try { if (f && f.antes && document.contains(f.antes)) f.antes.focus({ preventScroll: true }); } catch (e) { }
    }
  }
  function fecharTudo() { const p = pilha[0]; pilha = []; $('#overlay').classList.remove('open'); $('#modal').innerHTML = ''; $('#modal').className = 'modal'; window._pecaCtx = null; try { if (p && p.antes && document.contains(p.antes)) p.antes.focus({ preventScroll: true }); } catch (e) { } }
  const _closeModal = closeModal;
  window.closeModal = function () {
    /* só assumimos o fechamento quando o que está na tela é um modal nosso;
       openTaskModal e companhia escrevem em #modal sem passar pela pilha. */
    const meu = pilha.length && ehMeuModal();
    if (meu) return fecharTopo();
    if (pilha.length) pilha = [];
    _closeModal();
  };
  /* o index.html já escuta Escape e chama closeModal(), que agora é o nosso.
     Um listener próprio aqui fecharia dois níveis da pilha com uma tecla só. */

  function linhaLista(p) {
    return '<button class="li" onclick="MK.abrirPeca(' + p.num + ')"><span class="mk-num">#' + p.num + '</span><span class="t"><span class="tt">' + esc(p.title) + '</span><span class="ts">' + esc(catDe(p.cat).nome) + ' · ' + (p.pub ? 'publica ' + dmy(dataDoCal(p)) : 'sem data') + ' · ' + esc(shortName(p.resp)) + (p.reprov && p.stage === 'prod' ? ' · <b style="color:var(--critical-ink)">reprovada</b>' : '') + '</span></span><span class="mk-chan">' + p.canais.slice(0, 4).map(c => icone(c)).join('') + '</span>' + tagEstagio(p) + '</button>';
  }
  function abrirLista(titulo, itens) {
    abrirModal('<div class="modal-head"><h3 id="mTitle">' + esc(titulo) + '</h3><div class="grow"></div><span class="mk-pill">' + itens.length + '</span><button class="icon-btn" onclick="closeModal()" aria-label="Fechar" style="margin-left:8px">✕</button></div>' +
      '<div class="modal-body"><div class="list mk-list">' + (itens.length ? itens.slice().sort(ordena).map(linhaLista).join('') : '<div class="mk-empty">Nada aqui.</div>') + '</div></div>');
  }

  function abrirDia(date) {
    const html = () => {
      const dts = M.datas.filter(d => d.date === date);
      const pubs = M.pecas.filter(p => dataDoCal(p) === date).sort(ordena);
      const ini = M.pecas.filter(p => p.prodStart === date && p.stage !== 'ideia');
      const cc = M.pecas.filter(p => p.concl === date && dataDoCal(p) !== date);
      const n = faltam(date);
      return '<div class="modal-head mk-dayhead"><h3 id="mTitle">' + porExtenso(date) + '</h3><span class="mk-pill">' + (n === 0 ? 'hoje' : n > 0 ? 'em ' + n + ' dia' + (n > 1 ? 's' : '') : 'há ' + (-n) + ' dia' + (n < -1 ? 's' : '')) + '</span><div class="grow"></div><button class="icon-btn" onclick="closeModal()" aria-label="Fechar">✕</button></div><div class="modal-body">' +
        dts.map(d => '<button class="mk-alert" onclick="MK.abrirData(\'' + d.id + '\')"><span class="mk-al-days ' + (d.tipo === 'promocao' ? 'promo' : 'comem') + '">' + estrela() + '</span><span class="mk-al-info"><span class="mk-al-name">' + esc(d.nome) + '</span><span class="mk-al-sub">' + esc(d.desc || (d.tipo === 'promocao' ? 'Promoção' : 'Data comemorativa')) + ' · ' + (k => nPecas(k) + (k === 1 ? ' ligada' : ' ligadas'))(M.pecas.filter(p => p.dataId === d.id).length) + '</span></span></button>').join('') +
        '<div class="field"><label>Publicações do dia (' + pubs.length + ')</label><div class="list mk-list">' + (pubs.length ? pubs.map(linhaLista).join('') : '<div class="mk-empty">Nada publica neste dia.</div>') + '</div></div>' +
        (ini.length ? '<div class="field"><label>Começam a produção (' + ini.length + ')</label><div class="list mk-list">' + ini.map(linhaLista).join('') + '</div></div>' : '') +
        (cc.length ? '<div class="field"><label>Concluídas neste dia (' + cc.length + ')</label><div class="list mk-list">' + cc.map(linhaLista).join('') + '</div></div>' : '') +
        '</div><div class="modal-foot">' + (podeEditar()
          ? '<button class="btn ghost" onclick="MK.abrirData(null,\'' + date + '\')">＋ Data comemorativa</button><button class="btn" onclick="MK.abrirPeca(null,\'' + date + '\')">＋ Nova peça neste dia</button>'
          : '<span class="note-sm">Só o marketing e os gerentes criam peças e datas.</span>') + '</div>';
    };
    abrirModal(html()); definirRefresh(() => { $('#modal').innerHTML = html(); });
  }

  /* ---------- peça ---------- */
  const CAMPOS = ['title', 'desc', 'canais', 'links', 'etapas', 'cat', 'resp', 'revisor', 'pub', 'dataId', 'drive'];
  const etapasSaoDoModelo = x => { const m = modeloEtapas(x.cat); return m.length === x.etapas.length && m.every((e, i) => e.t === x.etapas[i].t && e.fase === x.etapas[i].fase); };
  async function abrirPeca(num, dataPreset, dataIdPreset) {
    const p = num ? pecaDe(num) : null;
    if (num && !p) { toast('Essa peça não existe mais.', 1); return; }
    let historico = [];
    if (p) {
      const h = await sb.from('mkt_historico').select('*').eq('peca_id', p.id).order('created_at');
      historico = (h.data || []).map(r => ({ by: r.by_id, at: r.created_at, txt: r.texto, rej: r.reprov }));
    }
    const catPadrao = M.cats[0];
    const rascunho = p ? clone(p) : {
      id: null, num: null, title: '', desc: '', cat: catPadrao ? catPadrao.id : null, canais: [], stage: 'ideia',
      resp: currentUser, revisor: null, pub: dataPreset || '', prodStart: '', concl: '', pubReal: '',
      links: [], etapas: modeloEtapas(catPadrao ? catPadrao.id : null), drive: '', dataId: dataIdPreset || null, reprov: null
    };
    const ctx = { p, rascunho, historico }; window._pecaCtx = ctx;
    const monta = () => {
      const x = ctx.rascunho, novo = !ctx.p, ed = podeEditar();
      const cat = catDe(x.cat), ps = etapasProd(x), pos = etapasPos(x), feito = ps.filter(e => e.done).length;
      const late = atrasada(x);
      const opts = (sel, filtro) => DB.people.filter(filtro || (() => true)).map(q => '<option value="' + q.id + '" ' + (q.id === sel ? 'selected' : '') + '>' + esc(q.name) + '</option>').join('');
      const linhaEtapa = e => '<div class="mk-step-edit ' + (e.done ? 'done' : '') + '">' +
        '<button class="minichk ' + (e.done ? 'on' : '') + '" ' + (ed ? 'onclick="MK.etapaRascunho(\'' + e.id + '\',\'toggle\')"' : 'disabled') + ' role="checkbox" aria-checked="' + e.done + '" aria-label="' + esc(e.t) + '">' + (e.done ? '✓' : '') + '</button>' +
        (ed ? '<button class="st" data-ren="e' + e.id + '" onclick="MK.etapaRascunho(\'' + e.id + '\',\'nome\')" title="Clique para renomear">' + esc(e.t) + '</button>' : '<span class="st">' + esc(e.t) + '</span>') +
        '<span class="fase ' + e.fase + '">' + (e.fase === 'pos' ? 'depois' : 'produção') + '</span>' +
        (ed ? '<select onchange="MK.etapaRascunho(\'' + e.id + '\',\'resp\',this.value)" aria-label="Responsável da etapa"><option value="">quem?</option>' + opts(e.resp, ehMkt) + '</select>' +
          '<input type="date" value="' + (e.date || '') + '" onchange="MK.etapaRascunho(\'' + e.id + '\',\'data\',this.value)" aria-label="Data da etapa">' +
          '<span class="sx-group"><button class="sx" onclick="MK.etapaRascunho(\'' + e.id + '\',\'sobe\')" aria-label="Subir">↑</button><button class="sx" onclick="MK.etapaRascunho(\'' + e.id + '\',\'desce\')" aria-label="Descer">↓</button><button class="sx" onclick="MK.etapaRascunho(\'' + e.id + '\',\'del\')" aria-label="Remover">✕</button></span>'
          : (e.resp ? avatar(e.resp, 'xs') : '') + '<span class="sd" style="font-size:clamp(14px,0.67vw + 4.848px,22px);color:var(--muted)">' + (e.date ? dm(e.date) : '') + '</span>') + '</div>';
      const podeAprovar = ehAprovador() && x.stage === 'rev' && !novo;
      return '<div class="mk-mhead">' + (novo ? '<span class="mk-num" title="O número sai do banco ao salvar — nunca repete">#—</span>' : '<span class="mk-num">#' + x.num + '</span>') +
        '<h3 id="mTitle">' + (novo ? 'Nova peça' : esc(x.title)) + '</h3>' + tagEstagio(x) + '<button class="icon-btn" onclick="MK.cancelarPeca()" aria-label="Fechar">✕</button></div>' +
        (x.reprov && x.stage === 'prod' ? '<div style="padding:14px 22px 0"><div class="mk-rejbox"><b>Reprovado por ' + esc(shortName(x.reprov.by)) + ':</b><span>' + esc(x.reprov.motivo || '') + '</span></div></div>' : '') +
        (vaiAoArHoje(x) ? '<div style="padding:14px 22px 0"><div class="note-sm" style="background:var(--brand-wash);color:var(--brand-ink);font-weight:650">Vai ao ar hoje — depois de postar, clique em "Confirmar publicação".</div></div>' : '') +
        (late ? '<div style="padding:14px 22px 0"><div class="note-sm" style="background:var(--crit-wash);color:var(--critical-ink);font-weight:650">Estava marcada para ' + dmy(x.pub) + ' e ' + (x.stage === 'aprov' ? 'ninguém confirmou a publicação. Publicou? Confirme abaixo. Não vai publicar? Mude a data.' : 'ainda não está pronta. Mude a data ou termine a peça.') + '</div></div>' : '') +
        '<div class="mk-mgrid"><div class="col">' +
        '<div class="field"><label for="f_title">Título</label><input id="f_title" value="' + esc(x.title) + '" maxlength="140" placeholder="Ex: Vídeo — Comedouro Elevado Pet em MDF" ' + (ed ? '' : 'disabled') + '></div>' +
        '<div class="field"><label for="f_desc">Descrição / briefing</label><textarea id="f_desc" rows="3" maxlength="2000" placeholder="Ângulo, o que mostrar, o que não pode faltar" ' + (ed ? '' : 'disabled') + '>' + esc(x.desc) + '</textarea></div>' +
        '<div class="field"><label>Canais onde vai ao ar</label><div class="mk-chanpick">' + M.canais.map(c => '<button class="chip-pick ' + (x.canais.includes(c.id) ? 'on' : '') + '" ' + (ed ? 'onclick="MK.canal(\'' + c.id + '\')"' : 'disabled') + ' role="checkbox" aria-checked="' + x.canais.includes(c.id) + '">' + icone(c.id) + esc(c.nome) + '</button>').join('') + (ed ? '<button class="chip-pick" onclick="MK.sincronizar();MK.abrirCadastros(\'canais\')" title="Cadastrar um canal novo">＋ canal</button>' : '') + '</div></div>' +
        '<div class="field mk-links"><label>Links (abrem em nova janela)</label><div>' + (x.links.length ? x.links.map((l, i) => '<div class="linkrow"><a href="' + esc(limpaUrl(l.url)) + '" target="_blank" rel="noopener noreferrer" title="' + esc(l.url) + '"><span>' + esc(l.desc || l.url) + '</span><span class="u">' + esc(l.url.replace(/^https?:\/\//, '')) + '</span><svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg></a>' + (ed ? '<button class="icon-btn" onclick="MK.link(\'del\',' + i + ')" aria-label="Remover link">✕</button>' : '') + '</div>').join('') : '<div class="note-sm">Nenhum link ainda.</div>') + '</div>' +
        (ed ? '<div class="linkadd" style="margin-top:8px"><input id="f_linkDesc" placeholder="Descrição (ex: Arte no Canva)"><input id="f_linkUrl" placeholder="Cole o link e tecle Enter" onkeydown="if(event.key===\'Enter\'){event.preventDefault();MK.link(\'add\')}"><button type="button" class="btn sm ghost" onclick="MK.link(\'add\')">+ Adicionar</button></div>' : '') + '</div>' +
        '<div class="field"><label>Etapas <span style="font-weight:500;color:var(--muted)">— ' + feito + ' de ' + ps.length + ' de produção feita' + (feito === 1 ? '' : 's') + (pos.length ? ' · ' + pos.length + ' para depois de publicar' : '') + (etapasSaoDoModelo(x) ? ' · modelo da categoria "' + esc(cat.nome) + '"' : ' · lista própria desta peça') + (novo || !ed ? '' : ' · marcar ✓ grava na hora; nome, ordem e datas só ao Salvar') + '</span></label><div>' + (x.etapas.length ? x.etapas.map(linhaEtapa).join('') : '<div class="note-sm">Sem etapas — escolha uma categoria ou adicione abaixo.</div>') + '</div>' +
        (ed ? '<div class="sub-add"><input id="f_step" placeholder="Nova etapa..." onkeydown="if(event.key===\'Enter\'){event.preventDefault();MK.etapaRascunho(null,\'add\')}"><select id="f_stepFase" style="max-width:130px" aria-label="Fase da etapa"><option value="prod">produção</option><option value="pos">depois de publicar</option></select><button class="btn" onclick="MK.etapaRascunho(null,\'add\')" aria-label="Adicionar etapa">＋</button></div>' : '') + '</div>' +
        (novo ? '' : '<div class="field"><label>Histórico</label><div class="mk-hist">' + ctx.historico.slice().reverse().map(h => '<div class="h ' + (h.rej ? 'rej' : '') + '">' + avatar(h.by, 'xs') + '<div><b>' + esc(shortName(h.by)) + '</b> ' + esc(textoHist(h.txt)) + '<div class="when">' + desde(h.at) + '</div></div></div>').join('') + '</div></div>') +
        '</div><div class="col"><div class="mk-side">' +
        '<div class="field"><label for="f_stage">Etapa do pipeline</label><select id="f_stage" ' + (ed ? '' : 'disabled') + ' onchange="MK.mudarEstagio(this.value)">' + ESTAGIOS.filter(s => !novo || s.id === 'ideia' || s.id === 'prod').map(s => '<option value="' + s.id + '" ' + (s.id === x.stage ? 'selected' : '') + ' ' + (((s.id === 'aprov' || s.id === 'pub') && !ehAprovador() && x.stage !== 'aprov') ? 'disabled' : '') + '>' + s.label + (((s.id === 'aprov' || s.id === 'pub') && !ehAprovador() && x.stage !== 'aprov') ? ' (só gerente)' : '') + '</option>').join('') + '</select>' + (novo ? '<div class="note-sm" style="margin-top:6px">Peça nova nasce como ideia ou já em produção; revisão, aprovação e publicação vêm depois, pelo fluxo.</div>' : '') + '</div>' +
        '<div class="field"><label for="f_cat">Categoria</label><select id="f_cat" ' + (ed ? '' : 'disabled') + ' onchange="MK.categoria(this.value)">' + (x.cat ? '' : '<option value="" selected>— escolha a categoria —</option>') + M.cats.map(c => '<option value="' + c.id + '" ' + (c.id === x.cat ? 'selected' : '') + '>' + esc(c.nome) + '</option>').join('') + '</select></div>' +
        '<div class="field-row"><div class="field"><label for="f_resp">Responsável</label><select id="f_resp" ' + (ed ? '' : 'disabled') + ' onchange="MK.campo(\'resp\',this.value)">' + opts(x.resp, q => ehMkt(q) || ['admin', 'gerente'].includes(q.level)) + '</select></div>' +
        '<div class="field"><label for="f_rev">Quem revisa</label><select id="f_rev" ' + (ed ? '' : 'disabled') + ' onchange="MK.campo(\'revisor\',this.value)"><option value="">qualquer gerente</option>' + opts(x.revisor, q => ['admin', 'gerente', 'gerente_mkt'].includes(q.level)) + '</select></div></div>' +
        '<div class="field"><label for="f_pub">Publicação planejada <span style="font-weight:500;color:var(--muted)">— comanda o calendário</span></label><input type="date" id="f_pub" value="' + (x.pub || '') + '" ' + (ed ? '' : 'disabled') + ' onchange="MK.campo(\'pub\',this.value)"></div>' +
        '<div class="mk-datebox"><div class="db auto"><label>Início da produção</label><b>' + (x.prodStart ? dmy(x.prodStart) : '—') + '</b><small>' + (x.prodStart ? 'marcado ao entrar em produção' : 'ao entrar em produção') + '</small></div>' +
        '<div class="db auto"><label>Conclusão</label><b>' + (x.concl ? dmy(x.concl) : '—') + '</b><small>' + (x.concl ? 'marcada ao publicar' : 'ao confirmar publicação') + '</small></div>' +
        (x.pubReal ? '<div class="db auto" style="grid-column:1/-1"><label>Publicação real</label><b class="' + (x.pub && x.pubReal > x.pub ? 'late' : '') + '">' + dmy(x.pubReal) + '</b><small>' + (x.pub === x.pubReal ? 'no dia planejado' : x.pub ? 'planejada era ' + dmy(x.pub) : '') + '</small></div>' : '') + '</div>' +
        '<div class="field"><label for="f_data">Data comemorativa ligada</label><select id="f_data" ' + (ed ? '' : 'disabled') + ' onchange="MK.campo(\'dataId\',this.value)"><option value="">nenhuma</option>' + M.datas.slice().sort((a, b) => a.date < b.date ? -1 : 1).map(d => '<option value="' + d.id + '" ' + (d.id === x.dataId ? 'selected' : '') + '>' + dm(d.date) + ' · ' + esc(d.nome) + '</option>').join('') + '</select></div>' +
        '<div class="field"><label>Pasta no Drive</label>' + (novo ? '<div class="note-sm">O nome da pasta aparece depois de salvar (usa o número da peça).</div>'
          : '<div class="mk-drive"><code>' + esc(pastaDrive(x)) + '</code><button class="btn ghost sm" onclick="MK.copiarPasta(' + x.num + ')" title="Copiar o nome da pasta">Copiar</button></div>' +
          '<input id="f_drive" style="margin-top:8px" placeholder="Cole o link da pasta do Drive" value="' + esc(x.drive) + '" ' + (ed ? '' : 'disabled') + ' onchange="MK.campo(\'drive\',this.value)">' +
          (x.drive ? '<a class="linkchip" style="display:inline-block;margin-top:6px" href="' + esc(limpaUrl(x.drive)) + '" target="_blank" rel="noopener noreferrer">Abrir pasta ↗</a>' : '')) + '</div>' +
        (pos.length ? '<div class="field"><label>Depois de publicar</label>' + pos.map(e => '<div class="mk-step ' + (e.done ? 'done' : '') + '"><button class="minichk ' + (e.done ? 'on' : '') + '" ' + (ed ? 'onclick="MK.etapaRascunho(\'' + e.id + '\',\'toggle\')"' : 'disabled') + ' role="checkbox" aria-checked="' + e.done + '" aria-label="' + esc(e.t) + '">' + (e.done ? '✓' : '') + '</button><span class="st">' + esc(e.t) + '</span></div>').join('') + '</div>' : '') +
        '</div></div></div>' +
        '<div class="modal-foot" style="flex-wrap:wrap">' +
        (!novo && ed ? '<button class="btn ghost" style="margin-right:auto;color:var(--critical-ink)" onclick="MK.excluirPeca(' + x.num + ')">Excluir</button>' : '') +
        (podeAprovar ? '<button class="btn danger" onclick="MK.abrirReprovar(' + x.num + ')">Reprovar</button><button class="btn ok" onclick="MK.aprovar(' + x.num + ')">Aprovar</button>' : '') +
        (!novo && ed && x.stage === 'prod' ? '<button class="btn ghost" onclick="MK.enviarRevisao(' + x.num + ')">Enviar para revisão</button>' : '') +
        (!novo && ed && x.stage === 'aprov' ? '<button class="btn ghost" onclick="MK.publicar(' + x.num + ')">Confirmar publicação</button>' : '') +
        '<button class="btn ghost" onclick="MK.cancelarPeca()">' + (ed && (novo || mudou()) ? 'Cancelar' : 'Fechar') + '</button>' +
        (ed ? '<button class="btn" onclick="MK.salvarPeca()">' + (novo ? 'Criar peça' : 'Salvar') + '</button>' : '') + '</div>';
    };
    abrirModal(monta(), 'wide', 'peca');
    definirRefresh(() => { $('#modal').innerHTML = monta(); });
    setTimeout(() => { const f = $('#f_title'); if (f && !num) f.focus(); }, 60);
  }
  function modeloEtapas(catId) {
    const c = catDe(catId);
    return (c.etapas || []).map((e, i) => ({ id: 'novo-' + i + '-' + Math.random().toString(36).slice(2, 7), t: e[0], fase: e[1], done: false, resp: null, date: '', pos: i }));
  }
  const rasc = () => { const c = window._pecaCtx; return c ? c.rascunho : null; };
  function sincronizar() {
    const x = rasc(); if (!x) return;
    const g = id => document.getElementById(id);
    if (g('f_title')) x.title = g('f_title').value;
    if (g('f_desc')) x.desc = g('f_desc').value;
    if (g('f_pub')) x.pub = g('f_pub').value;
    if (g('f_drive')) x.drive = limpaUrl(g('f_drive').value);
  }
  function mudou() {
    const c = window._pecaCtx; if (!c) return false;
    if (!c.p) return !!(c.rascunho.title || c.rascunho.desc || c.rascunho.canais.length || c.rascunho.links.length);
    return CAMPOS.some(k => JSON.stringify(c.p[k]) !== JSON.stringify(c.rascunho[k]));
  }
  /* além do rascunho, contam os campos de "acrescentar" que ainda não viraram item */
  const pendentesPeca = () => ['#f_step', '#f_linkDesc', '#f_linkUrl'].some(sel => { const e = $(sel); return !!(e && e.value.trim()); });
  function cancelarPeca() {
    const c = window._pecaCtx;
    if (c && podeEditar()) {
      sincronizar();
      if ((mudou() || pendentesPeca()) && !confirm('Descartar as alterações desta peça?')) return;
    }
    fecharModal();
  }

  /* salvar (insert/update + reconciliação de canais, etapas e links) */
  async function salvarPeca() {
    const c = window._pecaCtx; if (!c || !podeEditar()) return;
    sincronizar();
    const x = c.rascunho;
    if (!x.title.trim()) { const f = foco('#f_title'); if (f) f.style.borderColor = 'var(--critical)'; toast('Dê um título para a peça.', 1); return; }
    const campos = {
      titulo: cortaBonito(x.title.trim(), 140), descricao: x.desc || null, categoria_id: x.cat, resp_id: x.resp || null,
      revisor_id: x.revisor || null, pub: x.pub || null, data_id: x.dataId || null, drive_url: limpaUrl(x.drive) || null
    };
    let pecaId = x.id, num = x.num;
    if (!c.p) {
      campos.stage = ['ideia', 'prod'].includes(x.stage) ? x.stage : 'ideia';
      campos.created_by = currentUser;
      const r = await sb.from('mkt_pecas').insert(campos).select().single();
      if (r.error) { toast('Não deu para criar: ' + (r.error.message || 'sem permissão'), 1); return; }
      pecaId = r.data.id; num = r.data.num;
      await hist(pecaId, 'criou a peça');
    } else {
      if (!mudou()) { fecharModal(); toast('#' + num + ' sem alterações.'); return; }
      const r = await sb.from('mkt_pecas').update(campos).eq('id', pecaId);
      if (r.error) { toast('Não deu para salvar: ' + (r.error.message || 'sem permissão'), 1); return; }
      await hist(pecaId, 'editou a peça');
    }
    const antigo = c.p || { canais: [], etapas: [], links: [] };
    /* canais */
    const rem = antigo.canais.filter(id => !x.canais.includes(id));
    const add = x.canais.filter(id => !antigo.canais.includes(id));
    if (rem.length) await sb.from('mkt_peca_canais').delete().eq('peca_id', pecaId).in('canal_id', rem);
    if (add.length) await sb.from('mkt_peca_canais').insert(add.map(id => ({ peca_id: pecaId, canal_id: id })));
    /* links: poucos, troca completa */
    if (JSON.stringify(antigo.links) !== JSON.stringify(x.links)) {
      const idsFicam = x.links.map(l => l.id).filter(Boolean);
      const apagarL = (antigo.links || []).map(l => l.id).filter(id => id && !idsFicam.includes(id));
      if (apagarL.length) await sb.from('mkt_links').delete().in('id', apagarL);
      const novosL = x.links.filter(l => !l.id);
      if (novosL.length) await sb.from('mkt_links').insert(novosL.map(l => ({ peca_id: pecaId, descricao: l.desc || null, url: l.url, pos: x.links.indexOf(l) })));
      for (const l of x.links) {
        if (!l.id) continue;
        const a0 = (antigo.links || []).find(y => y.id === l.id);
        if (a0 && (a0.url !== l.url || (a0.desc || '') !== (l.desc || ''))) {
          await sb.from('mkt_links').update({ url: l.url, descricao: l.desc || null, pos: x.links.indexOf(l) }).eq('id', l.id);
        }
      }
    }
    /* etapas: reconcilia por id para não perder o que já está marcado */
    const idsRasc = x.etapas.filter(e => !String(e.id).startsWith('novo-')).map(e => e.id);
    const apagar = antigo.etapas.filter(e => !idsRasc.includes(e.id)).map(e => e.id);
    if (apagar.length) await sb.from('mkt_etapas').delete().in('id', apagar);
    for (let i = 0; i < x.etapas.length; i++) {
      const e = x.etapas[i];
      const linha = { titulo: e.t.slice(0, 80), fase: e.fase, resp_id: e.resp || null, data: e.date || null, pos: i };
      if (String(e.id).startsWith('novo-')) {
        linha.peca_id = pecaId; linha.done = !!e.done;
        if (e.done) { linha.done_by = currentUser; linha.done_at = new Date().toISOString(); }
        await sb.from('mkt_etapas').insert(linha);
      } else {
        const orig = antigo.etapas.find(o => o.id === e.id);
        if (!orig || orig.t !== e.t || orig.fase !== e.fase || (orig.resp || null) !== (e.resp || null) || (orig.date || '') !== (e.date || '') || orig.pos !== i)
          await sb.from('mkt_etapas').update(linha).eq('id', e.id);
      }
    }
    fecharTudo();
    if (!c.p) { toast('Peça #' + num + ' criada — pasta: ' + String(num).padStart(3, '0') + ' - ' + campos.titulo); if (campos.pub && !noMes(campos.pub)) irParaMesDe(campos.pub); }
    else toast('#' + num + ' salva.');
    await recarregar();
  }

  /* ---------- movimentos do pipeline (uma porta só) ---------- */
  async function mover(num, novo) {
    const p = pecaDe(num); if (!p || p.stage === novo) return;
    if (!podeEditar()) return toast('Você só pode ver — quem edita é o marketing e os gerentes.', 1);
    const de = p.stage;
    let jaPerguntouPub = false;
    if (novo === 'aprov') {
      if (!ehAprovador()) return toast('Só gerente ou admin aprova. Envie para revisão.', 1);
      if (de === 'pub') { if (!confirm('#' + num + ' está publicada. Voltar para Aprovado (não publicada)?')) return; jaPerguntouPub = true; }
      else if (de !== 'rev') return toast('Para aprovar, a peça precisa passar pela revisão.', 1);
      else return aprovar(num);
    }
    if (novo === 'pub') {
      if (de !== 'aprov') return toast('Só peça aprovada pode ser publicada.', 1);
      if (!confirm('Confirmar que #' + num + ' foi publicada hoje (' + dm(hoje()) + ')?')) return;
      return publicar(num);
    }
    if (novo === 'rev') {
      if (de !== 'prod') return toast('Para revisar, a peça precisa estar em produção.', 1);
      return enviarRevisao(num);
    }
    if (de === 'rev') {
      if (novo === 'prod' && ehAprovador()) return abrirReprovar(num);
      if (!confirm('Retirar #' + num + ' da revisão e voltar para ' + estagio(novo).label + '?')) return;
    }
    if (de === 'aprov' && !ehAprovador()) return toast('Só gerente ou admin desfaz uma aprovação.', 1);
    if (de === 'aprov' && !confirm('Desfazer a aprovação de #' + num + ' e voltar para ' + estagio(novo).label + '?')) return;
    if (de === 'pub' && !ehAprovador()) return toast('Só gerente ou admin despublica.', 1);
    if (de === 'pub' && !jaPerguntouPub && !confirm('#' + num + ' já está publicada. Marcar como não publicada e voltar para ' + estagio(novo).label + '?')) return;
    const r = await sb.from('mkt_pecas').update({ stage: novo }).eq('id', p.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    toast('#' + num + ' → ' + estagio(novo).label + (!p.pub && novo !== 'ideia' ? ' — sem data de publicação: defina uma para aparecer no calendário' : ''));
    await recarregar();
  }
  async function enviarRevisao(num) {
    const p = pecaDe(num); if (!p || !podeEditar()) return;
    if (p.stage === 'rev') return;
    if (p.stage !== 'prod') return toast('Para revisar, a peça precisa estar em produção.', 1);
    const ps = etapasProd(p), pend = ps.filter(e => !e.done).length;
    if (pend && !confirm('Ainda ' + (pend === 1 ? 'falta 1 etapa' : 'faltam ' + pend + ' etapas') + ' de produção. Enviar para revisão mesmo assim?')) return;
    const r = await sb.from('mkt_pecas').update({ stage: 'rev' }).eq('id', p.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await avisar(Object.assign({}, p, { stage: 'rev' }), shortName(currentUser) + ' enviou #' + num + ' "' + p.title + '" para revisão');
    toast('#' + num + ' enviada para revisão' + (p.revisor ? ' — ' + primeiroNome(p.revisor) + ' será avisado(a)' : '') + '.');
    await recarregar(); atualizarModal();
  }
  async function aprovar(num) {
    const p = pecaDe(num); if (!p) return;
    if (!ehAprovador()) return toast('Só gerente ou admin aprova.', 1);
    if (p.stage !== 'rev') return toast('Para aprovar, a peça precisa estar em revisão.', 1);
    const r = await sb.from('mkt_pecas').update({ stage: 'aprov' }).eq('id', p.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await avisar(p, shortName(currentUser) + ' aprovou #' + num + ' "' + p.title + '"');
    toast('#' + num + ' aprovada' + (p.pub ? ' — agendada para ' + dm(p.pub) : ' — falta a data de publicação') + '.');
    await recarregar(); atualizarModal();
  }
  function abrirReprovar(num) {
    const p = pecaDe(num); if (!p) return;
    if (!ehAprovador()) return toast('Só gerente ou admin reprova.', 1);
    abrirModal('<div class="modal-head"><h3 id="mTitle">Reprovar #' + p.num + '</h3><div class="grow"></div><button class="icon-btn" onclick="closeModal()" aria-label="Fechar">✕</button></div>' +
      '<div class="modal-body"><div class="note-sm">' + esc(p.title) + '</div>' +
      '<div class="field"><label for="f_motivo">Motivo (obrigatório) — aparece em vermelho no card e fica no histórico</label><textarea id="f_motivo" rows="3" maxlength="300" placeholder="Ex: preço antigo na arte; trocar para R$ 34,90"></textarea></div>' +
      '<div class="note-warn">A peça volta para <b>Em produção</b> e ' + esc(primeiroNome(p.resp)) + ' recebe a notificação.</div></div>' +
      '<div class="modal-foot"><button class="btn ghost" onclick="closeModal()">Cancelar</button><button class="btn danger" onclick="MK.reprovar(' + p.num + ')">Reprovar e devolver</button></div>');
    setTimeout(() => { const f = $('#f_motivo'); if (f) f.focus(); }, 50);
    definirSujo(['#f_motivo'], 'Descartar o motivo que você escreveu?');
  }
  async function reprovar(num) {
    const p = pecaDe(num); if (!p || !ehAprovador()) return;
    const m = ($('#f_motivo') ? $('#f_motivo').value : '').trim();
    if (!m) { const f = foco('#f_motivo'); if (f) f.style.borderColor = 'var(--critical)'; toast('Escreva o motivo da reprovação.', 1); return; }
    const r = await sb.from('mkt_pecas').update({ stage: 'prod', reprov: { by: currentUser, motivo: m } }).eq('id', p.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await avisar(p, shortName(currentUser) + ' reprovou #' + num + ' "' + p.title + '" — ' + m);
    fecharModal(); toast('#' + num + ' devolvida para produção com o motivo registrado.');
    await recarregar(); atualizarModal();
  }
  async function publicar(num) {
    const p = pecaDe(num); if (!p || !podeEditar()) return;
    if (p.stage !== 'aprov') return toast('Só peça aprovada pode ser publicada.', 1);
    const r = await sb.from('mkt_pecas').update({ stage: 'pub' }).eq('id', p.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    toast('#' + num + ' publicada. Conclusão registrada em ' + dm(hoje()) + '.');
    await recarregar(); atualizarModal();
  }
  async function excluirPeca(num) {
    const p = pecaDe(num); if (!p || !podeEditar()) return;
    if (p.stage === 'pub' && !ehAprovador()) return toast('Peça já publicada: só gerente ou admin exclui.', 1);
    if (!confirm('Excluir #' + num + ' "' + p.title + '"?\n\nO número ' + num + ' não volta a ser usado por nenhuma outra peça — a próxima nasce com o número seguinte. A pasta ' + pastaDrive(p) + ' no Drive continua lá; apague à mão se quiser.')) return;
    const r = await sb.from('mkt_pecas').delete().eq('id', p.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    fecharTudo(); toast('#' + num + ' excluída.'); await recarregar();
  }
  async function etapa(num, id) {
    const p = pecaDe(num); if (!p || !podeEditar()) return toast('Você só pode ver esta peça.', 1);
    const e = p.etapas.find(x => x.id === id); if (!e) return;
    const novo = !e.done;
    const r = await sb.from('mkt_etapas').update({ done: novo, done_by: novo ? currentUser : null, done_at: novo ? new Date().toISOString() : null }).eq('id', id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await recarregar(); atualizarModal();
  }

  /* ---------- edições no rascunho da peça ---------- */
  function etapaRascunho(id, op, valor) {
    const x = rasc(); if (!x || !podeEditar()) return;
    sincronizar();
    const i = x.etapas.findIndex(e => e.id === id), e = x.etapas[i];
    if (op === 'add') {
      const t = ($('#f_step') ? $('#f_step').value : '').trim(); if (!t) return;
      x.etapas.push({ id: 'novo-' + x.etapas.length + '-' + Math.random().toString(36).slice(2, 7), t: t.slice(0, 80), fase: ($('#f_stepFase') || { value: 'prod' }).value, done: false, resp: null, date: '', pos: x.etapas.length });
    } else if (!e) return;
    else if (op === 'toggle') {
      if (window._pecaCtx.p && !String(e.id).startsWith('novo-')) { etapa(x.num, e.id); return; }
      e.done = !e.done;
    }
    else if (op === 'nome') { return renomearInline('[data-ren="e' + e.id + '"]', e.t, 80, t => { e.t = t; atualizarModal(); }); }
    else if (op === 'resp') e.resp = valor || null;
    else if (op === 'data') e.date = valor;
    else if (op === 'del') { if (!confirm('Remover a etapa "' + e.t + '"?')) return; x.etapas.splice(i, 1); }
    else if (op === 'sobe' && i > 0) { const a = x.etapas; const tmp = a[i - 1]; a[i - 1] = a[i]; a[i] = tmp; }
    else if (op === 'desce' && i < x.etapas.length - 1) { const a = x.etapas; const tmp = a[i + 1]; a[i + 1] = a[i]; a[i] = tmp; }
    atualizarModal();
  }
  function canal(id) { const x = rasc(); if (!x || !podeEditar()) return; sincronizar(); const i = x.canais.indexOf(id); if (i >= 0) x.canais.splice(i, 1); else x.canais.push(id); atualizarModal(); }
  function categoria(id) {
    const x = rasc(); if (!x || !podeEditar()) return; sincronizar(); x.cat = id || null;
    if (!id) { atualizarModal(); return; }
    if (!x.etapas.some(e => e.done)) { x.etapas = modeloEtapas(id); toast('Etapas trocadas pelo modelo da categoria.'); }
    else toast('Categoria trocada; etapas já marcadas foram mantidas.');
    atualizarModal();
  }
  function campo(k, v) { const x = rasc(); if (!x) return; x[k] = (k === 'drive') ? limpaUrl(v) : (v || (k === 'pub' ? '' : null)); if (k === 'drive' && $('#f_drive')) $('#f_drive').value = x.drive; }
  function link(op, i) {
    const x = rasc(); if (!x || !podeEditar()) return; sincronizar();
    if (op === 'add') {
      const u = limpaUrl($('#f_linkUrl') ? $('#f_linkUrl').value : ''), d = ($('#f_linkDesc') ? $('#f_linkDesc').value : '').trim();
      if (!u) { foco('#f_linkUrl'); return toast('Cole um link que comece com http:// ou https://', 1); }
      x.links.push({ desc: d.slice(0, 80), url: u });
    } else if (op === 'del') x.links.splice(i, 1);
    atualizarModal();
  }
  function mudarEstagio(st) {
    const x = rasc(); if (!x || !podeEditar()) return; sincronizar();
    if (x.num) { $('#f_stage').value = x.stage; if (mudou() && !confirm('As alterações que você fez ainda não foram salvas e serão descartadas ao mover. Continuar?')) return; mover(x.num, st); }
    else { x.stage = st; atualizarModal(); }
  }
  function copiarPasta(num) {
    const p = pecaDe(num); if (!p) return; const t = pastaDrive(p);
    const fallback = () => { try { const ta = document.createElement('textarea'); ta.value = t; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); if (ok) { toast('Copiado: ' + t); return; } } catch (e) { } prompt('Copie o nome da pasta:', t); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(() => toast('Copiado: ' + t)).catch(fallback); else fallback();
  }

  /* ---------- datas comemorativas ---------- */
  function pascoa(y) { const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451), mo = Math.floor((h + l - 7 * m + 114) / 31), da = ((h + l - 7 * m + 114) % 31) + 1; return isoOf(new Date(y, mo - 1, da)); }
  function domingoN(y, m, n) { const d = new Date(y, m - 1, 1); let c = 0; while (true) { if (d.getDay() === 0) { c++; if (c === n) break; } d.setDate(d.getDate() + 1); } return isoOf(d); }
  function blackFriday(y) { const d = new Date(y, 10, 1); let c = 0; while (true) { if (d.getDay() === 4) { c++; if (c === 4) break; } d.setDate(d.getDate() + 1); } d.setDate(d.getDate() + 1); return isoOf(d); }
  function doAno(y) {
    return [{ nome: 'Ano Novo', date: y + '-01-01', tipo: 'comemorativa' }, { nome: 'Volta às aulas', date: y + '-02-01', tipo: 'promocao' },
    { nome: 'Carnaval', date: somaDias(pascoa(y), -47), tipo: 'comemorativa' }, { nome: 'Dia da Mulher', date: y + '-03-08', tipo: 'comemorativa' },
    { nome: 'Dia do Consumidor', date: y + '-03-15', tipo: 'promocao' }, { nome: 'Páscoa', date: pascoa(y), tipo: 'comemorativa' },
    { nome: 'Dia das Mães', date: domingoN(y, 5, 2), tipo: 'comemorativa' }, { nome: 'Dia dos Namorados', date: y + '-06-12', tipo: 'comemorativa' },
    { nome: 'Festa Junina (São João)', date: y + '-06-24', tipo: 'comemorativa' }, { nome: 'Dia dos Pais', date: domingoN(y, 8, 2), tipo: 'comemorativa' },
    { nome: 'Dia do Cliente', date: y + '-09-15', tipo: 'promocao' }, { nome: 'Dia das Crianças', date: y + '-10-12', tipo: 'comemorativa' },
    { nome: 'Dia do Professor', date: y + '-10-15', tipo: 'comemorativa' }, { nome: 'Halloween', date: y + '-10-31', tipo: 'comemorativa' },
    { nome: 'Black Friday', date: blackFriday(y), tipo: 'promocao' }, { nome: 'Natal', date: y + '-12-25', tipo: 'comemorativa' }];
  }
  let sugestoesCache = [];
  function sugestoes() {
    const t = hoje(), y = +t.slice(0, 4);
    return [...doAno(y), ...doAno(y + 1)].filter(s => s.date >= t && faltam(s.date) <= 366 && !M.datas.some(d => d.nome === s.nome && d.date === s.date)).sort((a, b) => a.date < b.date ? -1 : 1);
  }
  function abrirData(id, preset) {
    const d = id ? dataDe(id) : null; if (id && !d) return;
    const rascunho = d ? null : { nome: '', date: preset || '', tipo: 'comemorativa', desc: '', aviso: true };
    const monta = () => {
      const ed = podeEditar(), x = d || rascunho, lig = d ? M.pecas.filter(p => p.dataId === d.id) : [];
      const n = x.date ? faltam(x.date) : null;
      sugestoesCache = d ? [] : sugestoes();
      return '<div class="modal-head"><h3 id="mTitle">' + (d ? esc(d.nome) : 'Nova data comemorativa ou promoção') + '</h3><div class="grow"></div>' +
        (d ? '<span class="mk-pill">' + dmy(d.date) + ' · ' + (n === 0 ? 'hoje' : n > 0 ? 'em ' + n + ' dias' : 'passou') + '</span>' : '') +
        '<button class="icon-btn" onclick="closeModal()" aria-label="Fechar" style="margin-left:8px">✕</button></div><div class="modal-body">' +
        (!d && ed ? '<div class="field"><label>Sugestões do calendário comercial (' + sugestoesCache.length + ') <span style="font-weight:500;color:var(--muted)">— clique para preencher</span></label><div style="max-height:190px;overflow-y:auto">' +
          sugestoesCache.map((s, i) => '<button class="mk-sug" onclick="MK.usarSugestao(' + i + ')"><span class="mk-pill">' + dmy(s.date) + '</span><span class="nm">' + esc(s.nome) + '<small>' + (s.tipo === 'promocao' ? 'promoção' : 'comemorativa') + '</small></span><span style="color:var(--brand-ink);font-weight:700;font-size:clamp(15px,0.754vw + 4.704px,24px)">usar</span></button>').join('') + '</div></div>' : '') +
        '<div class="field-row"><div class="field"><label for="d_nome">Nome</label><input id="d_nome" value="' + esc(x.nome) + '" maxlength="80" placeholder="Ex: Dia do Cliente" ' + (ed ? '' : 'disabled') + '></div>' +
        '<div class="field"><label for="d_date">Data</label><input type="date" id="d_date" value="' + x.date + '" ' + (ed ? '' : 'disabled') + '></div></div>' +
        '<div class="field-row"><div class="field"><label for="d_tipo">Tipo</label><select id="d_tipo" ' + (ed ? '' : 'disabled') + '><option value="comemorativa" ' + (x.tipo === 'comemorativa' ? 'selected' : '') + '>Data comemorativa</option><option value="promocao" ' + (x.tipo === 'promocao' ? 'selected' : '') + '>Promoção / campanha</option></select></div>' +
        '<div class="field"><label for="d_aviso">Aviso no topo</label><select id="d_aviso" ' + (ed ? '' : 'disabled') + '><option value="1" ' + (x.aviso ? 'selected' : '') + '>30 dias antes (padrão)</option><option value="0" ' + (!x.aviso ? 'selected' : '') + '>Sem aviso — só no calendário</option></select></div></div>' +
        '<div class="field"><label for="d_desc">O que fazer nessa data</label><textarea id="d_desc" rows="2" maxlength="500" placeholder="Ex: cupom de 15% na Shopee e no ML durante a semana" ' + (ed ? '' : 'disabled') + '>' + esc(x.desc || '') + '</textarea></div>' +
        (d ? '<div class="field"><label>Peças ligadas (' + lig.length + ')</label><div class="list mk-list">' + (lig.length ? lig.sort(ordena).map(linhaLista).join('') : '<div class="mk-empty">Nenhuma peça ligada a esta data ainda.</div>') + '</div></div>' : '') +
        '</div><div class="modal-foot">' +
        (d && ed ? '<button class="btn ghost" style="margin-right:auto;color:var(--critical-ink)" onclick="MK.excluirData(\'' + d.id + '\')">Excluir</button><button class="btn ghost" onclick="MK.abrirPeca(null,\'' + d.date + '\',\'' + d.id + '\')">＋ Peça para esta data</button>' : '') +
        '<button class="btn ghost" onclick="closeModal()">' + (ed ? 'Cancelar' : 'Fechar') + '</button>' +
        (ed ? '<button class="btn" onclick="MK.salvarData(' + (d ? "'" + d.id + "'" : 'null') + ')">Salvar</button>' : '') + '</div>';
    };
    abrirModal(monta()); definirRefresh(() => { $('#modal').innerHTML = monta(); });
    if (!d) definirSujo(['#d_nome', '#d_desc'], 'Descartar esta data sem salvar?');
  }
  function usarSugestao(i) { const s = sugestoesCache[i]; if (!s) return; const n = $('#d_nome'), d = $('#d_date'), t = $('#d_tipo'); if (!n || !d || !t) return; n.value = s.nome; d.value = s.date; t.value = s.tipo; foco('#d_desc'); }
  async function salvarData(id) {
    if (!podeEditar()) return;
    const nome = $('#d_nome').value.trim(), data = $('#d_date').value;
    if (!nome || !data) { toast('Preencha nome e data.', 1); foco(nome ? '#d_date' : '#d_nome'); return; }
    if (data < hoje() && !confirm('Essa data já passou (' + dmy(data) + '). Marcar mesmo assim?')) return;
    const linha = { nome: nome.slice(0, 80), data, tipo: $('#d_tipo').value, aviso: $('#d_aviso').value === '1', descricao: $('#d_desc').value.trim() || null };
    const r = id ? await sb.from('mkt_datas').update(linha).eq('id', id) : await sb.from('mkt_datas').insert(Object.assign({ created_by: currentUser }, linha));
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    fecharModal(); toast('"' + nome + '" marcada para ' + dmy(data) + '.'); await recarregar();
  }
  async function excluirData(id) {
    if (!podeEditar()) return;
    const d = dataDe(id), lig = M.pecas.filter(p => p.dataId === id).length;
    if (!confirm('Excluir "' + d.nome + '"?' + (lig ? ' ' + nPecas(lig) + (lig === 1 ? ' fica' : ' ficam') + ' sem data ligada.' : ''))) return;
    const r = await sb.from('mkt_datas').delete().eq('id', id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    fecharModal(); await recarregar();
  }
  async function adicionarSugestao(i) {
    if (!podeEditar()) return; const s = sugestoes()[i]; if (!s) return;
    const r = await sb.from('mkt_datas').insert({ nome: s.nome, data: s.date, tipo: s.tipo, created_by: currentUser });
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    toast(s.nome + ' adicionada.'); await carregar(); atualizarModal(); renderView();
  }

  /* ---------- cadastros ---------- */
  let abaCfg = 'categorias', edCfg = null;
  function sincCfg() { if (!edCfg) return; const g = id => document.getElementById(id); if (g('c_nome')) edCfg.nome = g('c_nome').value; if (g('k_nome')) edCfg.nome = g('k_nome').value; if (g('k_tipo')) edCfg.tipo = g('k_tipo').value; if (g('k_url')) edCfg.url = g('k_url').value; }
  /* rascunho de categoria/canal: perde o que foi digitado se fechar sem salvar */
  function cfgSujo() {
    const campo = $('#c_step');
    if (campo && campo.value.trim()) return true;
    if (!edCfg) return false; sincCfg();
    return !edCfg.id && !!String(edCfg.nome || '').trim();
  }
  function cfgSair() { if (cfgSujo() && !confirm('Descartar o que você digitou?')) return false; edCfg = null; return true; }
  function abrirCadastros(aba) {
    abaCfg = aba || 'categorias'; edCfg = null;
    const monta = () => {
      const ed = podeEditar();
      const abas = '<div class="mk-tabs">' + [['categorias', 'Categorias'], ['canais', 'Canais'], ['datas', 'Datas']].map(a => '<button class="' + (abaCfg === a[0] ? 'active' : '') + '" onclick="MK.abaCfg(\'' + a[0] + '\')">' + a[1] + '</button>').join('') + '</div>';
      let corpo = '';
      if (abaCfg === 'categorias') {
        if (edCfg) {
          corpo = '<div class="field"><label for="c_nome">Nome da categoria</label><input id="c_nome" value="' + esc(edCfg.nome) + '" maxlength="40" placeholder="Ex: Vídeo YouTube"></div>' +
            '<div class="field"><label>Cor</label><div class="mk-colorpick">' + PALETA.map(c => '<button style="background:' + c + '" class="' + (edCfg.cor === c ? 'on' : '') + '" onclick="MK.cfgSet(\'cor\',\'' + c + '\')" aria-label="Cor ' + c + '"></button>').join('') + '</div></div>' +
            '<div class="field"><label>Modelo de etapas <span style="font-weight:500;color:var(--muted)">— toda peça nova desta categoria nasce com elas</span></label>' +
            edCfg.etapas.map((e, i) => '<div class="mk-step-edit"><button class="st" data-ren="c' + i + '" onclick="MK.cfgEtapa(' + i + ',\'nome\')" title="Clique para renomear">' + esc(e[0]) + '</button><button class="fase ' + e[1] + '" onclick="MK.cfgEtapa(' + i + ',\'fase\')" title="Clique para alternar produção / depois de publicar">' + (e[1] === 'pos' ? 'depois' : 'produção') + '</button><span class="sx-group"><button class="sx" onclick="MK.cfgEtapa(' + i + ',\'sobe\')" aria-label="Subir">↑</button><button class="sx" onclick="MK.cfgEtapa(' + i + ',\'desce\')" aria-label="Descer">↓</button><button class="sx" onclick="MK.cfgEtapa(' + i + ',\'del\')" aria-label="Remover">✕</button></span></div>').join('') +
            '<div class="sub-add"><input id="c_step" placeholder="Nova etapa do modelo..." onkeydown="if(event.key===\'Enter\'){event.preventDefault();MK.cfgAddEtapa()}"><select id="c_stepFase" style="max-width:130px" aria-label="Fase"><option value="prod">produção</option><option value="pos">depois de publicar</option></select><button class="btn" onclick="MK.cfgAddEtapa()" aria-label="Adicionar etapa">＋</button></div></div>' +
            '<div class="modal-foot" style="padding:12px 0 0;border:0">' + (edCfg.id ? '<button class="btn ghost" style="margin-right:auto;color:var(--critical-ink)" onclick="MK.cfgDelCat()">Excluir</button>' : '') +
            '<button class="btn ghost" onclick="MK.cfgVoltar()">Voltar</button><button class="btn" onclick="MK.cfgSalvarCat()">Salvar categoria</button></div>';
        } else {
          corpo = '<div class="note-sm">A categoria define a cor da etiqueta e o modelo de etapas que a peça recebe ao nascer. As etapas continuam editáveis dentro de cada peça.</div>' +
            M.cats.map(c => '<div class="mk-cfg-row"><span class="swatch" style="background:' + c.cor + '"></span><div class="nm">' + esc(c.nome) + '<small>' + c.etapas.filter(e => e[1] === 'prod').length + ' etapas de produção · ' + c.etapas.filter(e => e[1] === 'pos').length + ' depois de publicar · ' + nPecas(M.pecas.filter(p => p.cat === c.id).length) + '</small></div>' + (ed ? '<button class="btn ghost sm" onclick="MK.cfgEditCat(\'' + c.id + '\')">Editar</button>' : '') + '</div>').join('') +
            (ed ? '<button class="mk-newcard" style="margin-top:10px" onclick="MK.cfgEditCat(null)">＋ Nova categoria</button>' : '');
        }
      } else if (abaCfg === 'canais') {
        if (edCfg) {
          corpo = '<div class="field-row"><div class="field"><label for="k_nome">Nome do canal</label><input id="k_nome" value="' + esc(edCfg.nome) + '" maxlength="30" placeholder="Ex: Kwai"></div>' +
            '<div class="field"><label for="k_tipo">Tipo</label><select id="k_tipo"><option value="rede" ' + (edCfg.tipo === 'rede' ? 'selected' : '') + '>Rede social</option><option value="marketplace" ' + (edCfg.tipo === 'marketplace' ? 'selected' : '') + '>Marketplace</option></select></div></div>' +
            '<div class="field"><label>Cor</label><div class="mk-colorpick">' + PALETA.concat(['#111111', '#e6b800', '#ff6e00', '#d62976']).map(c => '<button style="background:' + c + '" class="' + (edCfg.cor === c ? 'on' : '') + '" onclick="MK.cfgSet(\'cor\',\'' + c + '\')" aria-label="Cor ' + c + '"></button>').join('') + '</div></div>' +
            '<div class="field"><label>Logo</label><div class="mk-chanpick">' + Object.keys(ICONES).map(k => '<button class="chip-pick ' + (edCfg.icon === k ? 'on' : '') + '" onclick="MK.cfgSet(\'icon\',\'' + k + '\')"><span class="ci" style="background:' + edCfg.cor + ';--tinta:' + tintaSobre(edCfg.cor) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + ICONES[k] + '"/></svg></span>' + k + '</button>').join('') +
            '<button class="chip-pick ' + (!edCfg.icon ? 'on' : '') + '" onclick="MK.cfgSet(\'icon\',\'\')"><span class="ci" style="background:' + edCfg.cor + ';--tinta:' + tintaSobre(edCfg.cor) + '"><span class="lt">' + esc((edCfg.nome || '?')[0].toUpperCase()) + '</span></span>sem logo (inicial)</button></div>' +
            '<div class="note-sm" style="margin-top:8px">Canal sem logo no pacote (Kwai, Mercado Livre) usa a inicial.</div></div>' +
            '<div class="field"><label for="k_url">Link do perfil (opcional)</label><input id="k_url" value="' + esc(edCfg.url || '') + '" placeholder="https://..."></div>' +
            '<div class="modal-foot" style="padding:12px 0 0;border:0">' + (edCfg.id ? '<button class="btn ghost" style="margin-right:auto;color:var(--critical-ink)" onclick="MK.cfgDelCanal()">Excluir</button>' : '') +
            '<button class="btn ghost" onclick="MK.cfgVoltar()">Voltar</button><button class="btn" onclick="MK.cfgSalvarCanal()">Salvar canal</button></div>';
        } else {
          corpo = '<div class="note-sm">Redes sociais e marketplaces numa lista só. Uma peça pode ir ao ar em vários canais.</div>' +
            M.canais.map(c => '<div class="mk-cfg-row"><span class="mk-chan">' + icone(c.id, 'big') + '</span><div class="nm">' + esc(c.nome) + '<small>' + (c.tipo === 'marketplace' ? 'marketplace' : 'rede social') + ' · ' + nPecas(M.pecas.filter(p => p.canais.includes(c.id)).length) + (limpaUrl(c.url) ? ' · <a href="' + esc(limpaUrl(c.url)) + '" target="_blank" rel="noopener noreferrer" style="color:var(--brand-ink)">perfil ↗</a>' : '') + '</small></div>' + (ed ? '<button class="btn ghost sm" onclick="MK.cfgEditCanal(\'' + c.id + '\')">Editar</button>' : '') + '</div>').join('') +
            (ed ? '<button class="mk-newcard" style="margin-top:10px" onclick="MK.cfgEditCanal(null)">＋ Criar canal</button>' : '');
        }
      } else {
        const sug = sugestoes();
        corpo = '<div class="note-sm">Datas com aviso aparecem no topo da aba 30 dias antes e em destaque no dia do calendário.</div>' +
          M.datas.slice().sort((a, b) => a.date < b.date ? -1 : 1).map(d => { const n = faltam(d.date); return '<button class="mk-cfg-row" onclick="MK.abrirData(\'' + d.id + '\')"><span class="mk-pill">' + dmy(d.date) + '</span><span class="nm">' + esc(d.nome) + '<small>' + (d.tipo === 'promocao' ? 'promoção' : 'comemorativa') + ' · ' + (n < 0 ? 'passou' : n === 0 ? 'hoje' : 'em ' + n + ' dias') + ' · ' + nPecas(M.pecas.filter(p => p.dataId === d.id).length) + (d.aviso ? '' : ' · sem aviso') + '</small></span><span style="color:var(--muted)">›</span></button>'; }).join('') +
          (ed ? '<button class="mk-newcard" style="margin-top:10px" onclick="MK.abrirData(null)">＋ Nova data (manual ou por sugestão)</button>' : '') +
          (sug.length ? '<div class="field" style="margin-top:14px"><label>Sugestões do calendário comercial ainda não cadastradas (' + sug.length + ') <span style="font-weight:500;color:var(--muted)">— role a lista para ver todas</span></label><div style="max-height:260px;overflow-y:auto">' + sug.map((s, i) => '<div class="mk-sug"><span class="mk-pill">' + dmy(s.date) + '</span><span class="nm">' + esc(s.nome) + '<small>' + (s.tipo === 'promocao' ? 'promoção' : 'comemorativa') + '</small></span>' + (ed ? '<button class="btn ghost sm" onclick="MK.addSugestao(' + i + ')">Adicionar</button>' : '') + '</div>').join('') + '</div></div>' : '');
      }
      return '<div class="modal-head"><h3 id="mTitle">Cadastros do marketing</h3><div class="grow"></div><button class="icon-btn" onclick="closeModal()" aria-label="Fechar">✕</button></div><div class="modal-body">' + abas + corpo + '</div>';
    };
    abrirModal(monta(), null, 'cadastros'); definirRefresh(() => { const s = $('#modal').scrollTop; $('#modal').innerHTML = monta(); $('#modal').scrollTop = s; });
    const t = pilha[pilha.length - 1];
    if (t) { t.sujo = cfgSujo; t.pergunta = 'Descartar o que você digitou?'; }
  }
  async function cfgSalvarCat() {
    if (!podeEditar()) return; sincCfg();
    const nome = (edCfg.nome || '').trim(); if (!nome) { foco('#c_nome'); return toast('Dê um nome para a categoria.', 1); }
    const linha = { nome: nome.slice(0, 40), cor: edCfg.cor, etapas: edCfg.etapas.map(e => ({ t: e[0], fase: e[1] })) };
    const r = edCfg.id ? await sb.from('mkt_categorias').update(linha).eq('id', edCfg.id)
      : await sb.from('mkt_categorias').insert(Object.assign({ pos: M.cats.length + 1 }, linha));
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    edCfg = null; toast('Categoria salva.'); await carregar(); atualizarModal(); renderView();
  }
  async function cfgDelCat() {
    if (!podeEditar()) return;
    const n = M.pecas.filter(p => p.cat === edCfg.id).length;
    if (n) return toast('Não dá: ' + nPecas(n) + (n === 1 ? ' usa' : ' usam') + ' esta categoria. Troque a categoria delas antes.', 1);
    if (!confirm('Excluir esta categoria?')) return;
    const r = await sb.from('mkt_categorias').delete().eq('id', edCfg.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    edCfg = null; await carregar(); atualizarModal(); renderView();
  }
  async function cfgSalvarCanal() {
    if (!podeEditar()) return; sincCfg();
    const nome = (edCfg.nome || '').trim(); if (!nome) { foco('#k_nome'); return toast('Dê um nome para o canal.', 1); }
    const linha = { nome: nome.slice(0, 30), tipo: edCfg.tipo, cor: edCfg.cor, icon: edCfg.icon || null, letra: nome.slice(0, 2).toUpperCase(), url: limpaUrl(edCfg.url) || null };
    const r = edCfg.id ? await sb.from('mkt_canais').update(linha).eq('id', edCfg.id)
      : await sb.from('mkt_canais').insert(Object.assign({ pos: M.canais.length + 1 }, linha));
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    edCfg = null; toast('Canal salvo.'); await carregar(); atualizarModal(); renderView();
  }
  async function cfgDelCanal() {
    if (!podeEditar()) return;
    const n = M.pecas.filter(p => p.canais.includes(edCfg.id)).length;
    if (!confirm('Excluir este canal?' + (n ? ' ' + nPecas(n) + (n === 1 ? ' deixa' : ' deixam') + ' de tê-lo.' : ''))) return;
    const r = await sb.from('mkt_canais').delete().eq('id', edCfg.id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    edCfg = null; await carregar(); atualizarModal(); renderView();
  }

  /* ---------- rotina ---------- */
  async function marcarRotina(id) {
    if (!podeEditar()) return toast('Só o marketing e os gerentes marcam a rotina.', 1);
    const sem = semanaAtual(), f = feitoDe(id, sem);
    const r = f ? await sb.from('mkt_rotina_feitos').delete().eq('item_id', id).eq('semana', sem)
      : await sb.from('mkt_rotina_feitos').insert({ item_id: id, semana: sem, done_by: currentUser });
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await recarregar();
  }
  function editarRotina() {
    if (!podeEditar()) return;
    const monta = () => '<div class="modal-head"><h3 id="mTitle">Editar rotina de marketing</h3><div class="grow"></div><button class="icon-btn" onclick="closeModal()" aria-label="Fechar">✕</button></div><div class="modal-body">' +
      '<div class="note-sm">Rotina do time inteiro, de segunda a domingo. Toda segunda-feira as marcações zeram e a semana anterior vai para o histórico.</div>' +
      [1, 2, 3, 4, 5, 6, 7].map(d => '<div class="field"><label>' + cap(WDL[d]) + '</label>' +
        (M.rotina.filter(i => i.dia === d).map(i => '<div class="mk-step-edit"><button class="st" data-ren="r' + i.id + '" onclick="MK.rotRenomear(\'' + i.id + '\')" title="Clique para renomear">' + esc(i.titulo) + '</button>' +
          '<select onchange="MK.rotResp(\'' + i.id + '\',this.value)" aria-label="Responsável"><option value="">time todo</option>' + DB.people.filter(ehMkt).map(q => '<option value="' + q.id + '" ' + (q.id === i.resp ? 'selected' : '') + '>' + esc(primeiroNome(q.id)) + '</option>').join('') + '</select>' +
          '<span class="sx-group"><button class="sx" onclick="MK.rotRemover(\'' + i.id + '\')" aria-label="Remover">✕</button></span></div>').join('') || '<div class="note-sm">sem itens</div>') +
        '<div class="sub-add"><input id="rot_new_' + d + '" placeholder="Novo item de ' + WDL[d] + '..." onkeydown="if(event.key===\'Enter\'){event.preventDefault();MK.rotNovo(' + d + ')}"><button class="btn sm" onclick="MK.rotNovo(' + d + ')" aria-label="Adicionar item">＋</button></div></div>').join('') +
      '</div><div class="modal-foot"><button class="btn" onclick="closeModal()">Pronto</button></div>';
    abrirModal(monta()); definirRefresh(() => { const s = $('#modal').scrollTop; $('#modal').innerHTML = monta(); $('#modal').scrollTop = s; });
    definirSujo([1, 2, 3, 4, 5, 6, 7].map(d => '#rot_new_' + d), 'Você escreveu um item e ainda não acrescentou. Descartar?');
  }
  async function rotNovo(d) {
    if (!podeEditar()) return;
    const inp = document.getElementById('rot_new_' + d); const t = (inp ? inp.value : '').trim(); if (!t) return;
    const r = await sb.from('mkt_rotina_itens').insert({ dia: d, titulo: t.slice(0, 120), pos: M.rotina.filter(i => i.dia === d).length + 1, active: true });
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    if (inp) inp.value = '';
    await carregar(); atualizarModal(); renderView(); setTimeout(() => foco('#rot_new_' + d), 30);
  }
  async function rotRenomear(id) {
    const it = M.rotina.find(i => i.id === id); if (!it || !podeEditar()) return;
    renomearInline('[data-ren="r' + it.id + '"]', it.titulo, 120, async t => {
      const r = await sb.from('mkt_rotina_itens').update({ titulo: t }).eq('id', id);
      if (r.error) { toast(r.error.message || 'sem permissão', 1); return atualizarModal(); }
      await carregar(); atualizarModal(); renderView();
    });
  }
  async function rotResp(id, v) {
    if (!podeEditar()) return;
    const r = await sb.from('mkt_rotina_itens').update({ resp_id: v || null }).eq('id', id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await carregar(); renderView();
  }
  async function rotRemover(id) {
    const it = M.rotina.find(i => i.id === id); if (!it || !podeEditar()) return;
    if (!confirm('Remover "' + it.titulo + '" da rotina?')) return;
    const r = await sb.from('mkt_rotina_itens').update({ active: false }).eq('id', id);
    if (r.error) return toast(r.error.message || 'sem permissão', 1);
    await carregar(); atualizarModal(); renderView();
  }
  function historicoRotina() {
    const sem = semanaAtual(), total = M.rotina.length;
    const semanas = [];
    for (let i = 0; i < 8; i++) { const s = somaDias(sem, -7 * i); semanas.push({ s, n: i === 0 ? M.rotina.filter(x => feitoDe(x.id, s)).length : M.feitos.filter(f => f.semana === s).length, atual: i === 0 }); }
    abrirModal('<div class="modal-head"><h3 id="mTitle">Histórico da rotina</h3><div class="grow"></div><button class="icon-btn" onclick="closeModal()" aria-label="Fechar">✕</button></div><div class="modal-body"><div class="bars">' +
      semanas.map(w => { const pct = total ? Math.round(w.n / total * 100) : 0; return '<div class="bar-item"><div class="bl">' + dm(w.s) + ' – ' + dm(somaDias(w.s, 6)) + (w.atual ? ' <span class="mk-pill">atual</span>' : '') + '</div><div class="bar-track"><div class="bar-fill" style="width:' + pct + '%;background:' + (pct >= 80 ? 'var(--good)' : pct >= 50 ? 'var(--warning)' : 'var(--critical)') + '"></div></div><div class="bv">' + w.n + '/' + total + ' · ' + pct + '%</div></div>'; }).join('') +
      '</div><div class="note-sm" style="margin-top:14px">Cada semana guarda quem marcou cada item.</div></div>');
  }

  /* ---------- arrastar ---------- */
  function ligarArrasto() {
    if (!podeEditar()) return;
    document.querySelectorAll('.mk-card[draggable="true"],.mk-ev[draggable="true"]').forEach(el => {
      el.addEventListener('dragstart', e => { window._mkDrag = +el.dataset.num; el.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', el.dataset.num); } catch (x) { } });
      el.addEventListener('dragend', () => { el.classList.remove('dragging'); window._mkDrag = null; document.querySelectorAll('.drag-over').forEach(x => x.classList.remove('drag-over')); });
    });
    const numDe = e => { let n = null; try { n = +e.dataTransfer.getData('text/plain'); } catch (x) { } if (!n) n = window._mkDrag; window._mkDrag = null; return n || null; };
    document.querySelectorAll('.mk-kanban .kcol').forEach(col => {
      col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('drag-over'); });
      col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
      col.addEventListener('drop', e => { e.preventDefault(); col.classList.remove('drag-over'); const n = numDe(e); if (n) mover(n, col.dataset.stage); });
    });
    document.querySelectorAll('.mk-cell[data-date]').forEach(cell => {
      cell.addEventListener('dragover', e => { e.preventDefault(); cell.classList.add('drag-over'); });
      cell.addEventListener('dragleave', () => cell.classList.remove('drag-over'));
      cell.addEventListener('drop', async e => {
        e.preventDefault(); cell.classList.remove('drag-over');
        const n = numDe(e); if (!n) return;
        const p = pecaDe(n), nd = cell.dataset.date;
        if (!p || p.pub === nd) return;
        if (nd < hoje() && p.stage !== 'pub' && !confirm(dmy(nd) + ' já passou — a peça #' + n + ' vai ficar marcada como atrasada. Mover mesmo assim?')) return;
        if (!noMes(nd) && !confirm('Mover #' + n + ' para ' + dmy(nd) + ' (' + mesCurto(nd) + ')? A tela vai mostrar esse mês.')) return;
        const r = await sb.from('mkt_pecas').update({ pub: nd }).eq('id', p.id);
        if (r.error) return toast(r.error.message || 'sem permissão', 1);
        await hist(p.id, 'mudou a publicação de ' + (p.pub ? dmy(p.pub) : 'sem data') + ' para ' + dmy(nd));
        if (!noMes(nd)) { irParaMesDe(nd); toast('#' + n + ' agora publica em ' + dmy(nd) + ' — mostrando ' + nomeMes() + '.'); }
        else toast('#' + n + ' agora publica em ' + dm(nd) + '.');
        await recarregar();
      });
    });
  }
  function irParaMesDe(s) { const d = new Date(s + 'T12:00:00'); mesCal = { y: d.getFullYear(), m: d.getMonth() }; }

  /* ---------- listas nomeadas ---------- */
  function lista(qual) {
    const v = pecasVisiveis();
    if (qual === 'late') return abrirLista('Atrasadas — a data de publicação passou', v.filter(atrasada));
    if (qual === 'semdata') return abrirLista('Ideias sem data ou com data vencida', M.pecas.filter(p => p.stage === 'ideia' && (!p.pub || ideiaVencida(p))));
    if (qual === 'prod-todas') return abrirLista('Em produção — todos os meses', M.pecas.filter(p => p.stage === 'prod'));
    if (qual === 'hoje') return abrirLista('Vai ao ar hoje', M.pecas.filter(vaiAoArHoje));
    const s = estagio(qual);
    return abrirLista(s.label, v.filter(p => p.stage === qual));
  }

  /* ---------------- API pública (usada só pelos onclick do módulo) ---------------- */
  window.MK = {
    mes: d => { mesCal.m += d; if (mesCal.m < 0) { mesCal.m = 11; mesCal.y--; } if (mesCal.m > 11) { mesCal.m = 0; mesCal.y++; } renderView(); },
    mesHoje: () => { const d = new Date(); mesCal = { y: d.getFullYear(), m: d.getMonth() }; renderView(); },
    irParaMes: (y, m) => { mesCal = { y, m }; renderView(); },
    limparBusca: () => { const s = $('#search'); if (s) s.value = ''; searchTerm = ''; renderView(); },
    alternarEstagio: id => { if (escondidos.has(id)) escondidos.delete(id); else escondidos.add(id); renderView(); },
    mostrarTudo: () => { escondidos.clear(); renderView(); },
    verInicio: () => { verInicio = !verInicio; renderView(); },
    cronoTudo: () => { cronoMes = !cronoMes; renderView(); },
    lista, abrirDia, abrirData, abrirPeca, abrirCadastros,
    abrirDoAviso: num => { if (route !== 'marketing') go('marketing'); setTimeout(() => abrirPeca(num), 60); },
    abrirReprovar, reprovar, aprovar, publicar, enviarRevisao, excluirPeca, etapa, copiarPasta,
    salvarPeca, cancelarPeca, sincronizar, etapaRascunho, canal, categoria, campo, link, mudarEstagio, mover,
    usarSugestao, salvarData, excluirData, addSugestao: adicionarSugestao,
    abaCfg: a => { if (!cfgSair()) return; abaCfg = a; atualizarModal(); },
    cfgVoltar: () => { if (cfgSair()) atualizarModal(); },
    cfgSet: (k, v) => { sincCfg(); edCfg[k] = v; atualizarModal(); },
    cfgEditCat: id => { if (!podeEditar()) return; sincCfg(); const c = M.cats.find(x => x.id === id); edCfg = c ? { id: c.id, nome: c.nome, cor: c.cor, etapas: clone(c.etapas) } : { id: null, nome: '', cor: PALETA[M.cats.length % PALETA.length], etapas: [['Briefing', 'prod'], ['Produção', 'prod'], ['Acompanhar resultado', 'pos']] }; atualizarModal(); },
    cfgEditCanal: id => { if (!podeEditar()) return; sincCfg(); const c = M.canais.find(x => x.id === id); edCfg = c ? { id: c.id, nome: c.nome, cor: c.cor, icon: c.icon || '', tipo: c.tipo, url: c.url || '' } : { id: null, nome: '', cor: '#2976d4', icon: '', tipo: 'rede', url: '' }; atualizarModal(); },
    cfgEtapa: (i, op) => {
      sincCfg(); const a = edCfg.etapas; if (!a[i]) return;
      if (op === 'nome') { return renomearInline('[data-ren="c' + i + '"]', a[i][0], 80, t => { a[i][0] = t; atualizarModal(); }); }
      else if (op === 'fase') a[i][1] = a[i][1] === 'prod' ? 'pos' : 'prod';
      else if (op === 'sobe' && i > 0) { const t = a[i - 1]; a[i - 1] = a[i]; a[i] = t; }
      else if (op === 'desce' && i < a.length - 1) { const t = a[i + 1]; a[i + 1] = a[i]; a[i] = t; }
      else if (op === 'del') a.splice(i, 1);
      atualizarModal();
    },
    cfgAddEtapa: () => { sincCfg(); const t = ($('#c_step') ? $('#c_step').value : '').trim(); if (!t) return; edCfg.etapas.push([t.slice(0, 80), ($('#c_stepFase') || { value: 'prod' }).value]); atualizarModal(); },
    cfgSalvarCat, cfgDelCat, cfgSalvarCanal, cfgDelCanal,
    rotina: marcarRotina, editarRotina, rotNovo, rotRenomear, rotResp, rotRemover, historicoRotina
  };
})();
