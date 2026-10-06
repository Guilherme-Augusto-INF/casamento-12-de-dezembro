import test from 'node:test';import assert from 'node:assert/strict';import {remaining,rsvpLink,wedding as w} from '../src/config/wedding.js';
test('data respeita meia-noite em São Paulo',()=>assert.equal(new Date(w.date).toISOString(),'2026-12-12T03:00:00.000Z'));
test('contador decompõe dias e unidades',()=>assert.deepEqual(remaining(new Date(w.date).getTime()-90061000).values,[1,1,1,1]));
test('contador encerra sem valores negativos',()=>assert.deepEqual(remaining(new Date(w.date).getTime()+1000),{ended:true,values:[0,0,0,0]}));
test('RSVP sem telefone não inventa destinatário',()=>assert.equal(rsvpLink('Gui',0),''));
test('RSVP codifica mensagem',()=>{w.whatsapp='5511999999999';const url=rsvpLink('Gui & Ana',2);assert.ok(url.startsWith('https://wa.me/5511999999999?'));assert.ok(decodeURIComponent(url).includes('Gui & Ana'));w.whatsapp='';});
