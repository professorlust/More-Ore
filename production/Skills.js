'use strict';var Skill=function(a){var b=this;this.name=a.name,this.className=a.name.replace(/\s/g,''),this.desc=a.desc,this.fillerTxt=a.fillerTxt,this.type=a.type,this.generationReq=a.generationReq,this.pic=a.pic?a.pic:'skill-container',this.section=a.section,this.locked=a.locked,this.lvl=a.lvl?a.lvl:0,this.maxLvl=a.maxLvl?a.maxLvl:100,a.drawLines&&(this.drawLines=a.drawLines),a.requires&&(this.requires=a.requires),a.onLvl&&(this.onLvl=a.onLvl),Game.skills.push(this),this.levelUp=function(){!b.locked&&b.lvl<b.maxLvl&&0<Game.state.player.generation.availableSp&&(Game.state.player.generation.availableSp--,b.lvl++,Game.risingNumber(null,'skill up'),Game.state.player.skills['spSection'+b.section]++,Game.playSound('skill-lvl-up'),document.querySelector('.available-sp').innerHTML='Available Sp: '+Game.state.player.generation.availableSp,b.onLvl&&(b.onLvl.addPermaOpC&&(Game.state.permanentOpcMulti+=b.onLvl.addPermaOpC),b.onLvl.addPermaOpS&&(Game.state.permanentOpsMulti+=b.onLvl.addPermaOpS),Game.calculateOpS(),Game.calculateOpC()),Game.hideTooltip(),Game.unlockSkills())}},skills=[{name:'Pickaxe Mastery',pic:'pickaxe-mastery',fillerTxt:'Refine your knowledge with the ins and outs of everything pickaxe.',type:'passive',generationReq:2,section:1,desc:'Increase your total OpC by 10% for each level in Pickaxe Mastery',maxLvl:5,locked:1,drawLines:[{from:'right',to:'Heavy Strike'}],requires:[['The Start',1]]},{name:'Heavy Strike',pic:'heavy-smash',fillerTxt:'I fear not the man who has practiced 10,000 pickaxe swings once, but I fear the man who has practiced one pickaxe swing 10,000 times. - Michael Scott',type:'active',generationReq:5,section:1,desc:'Deal a strong strike',maxLvl:5,locked:1,requires:[['Pickaxe Mastery',5]],drawLines:[{from:'right',to:'Powerlifting'},{from:'right',to:'Conditioning'}]},{name:'Powerlifting',fillerTxt:'I lift things up and put them down',type:'passive',generationReq:6,section:1,desc:'+5 to base strength for each level in Powerlifting',maxLvl:10,locked:1,requires:[['Heavy Strike',1]]},{name:'Conditioning',fillerTxt:'Crossfit is, like, totally awesome.',type:'passive',generationReq:6,section:1,desc:'+5 to base dex for each level in Powerlifting',maxLvl:10,locked:1,requires:[['Heavy Strike',1]]},{name:'The Start',pic:'the-start',fillerTxt:'In the beginning, there was nothing. Then... ORES',type:'passive',generationReq:1,section:2,desc:'Increases your total OpC and Ops by 50%',maxLvl:1,locked:0,drawLines:[{from:'top',to:'Pickaxe Mastery'},{from:'bottom',to:'Managerial Mastery'}],onLvl:{addPermaOpC:.5,addPermaOpS:.5}},{name:'Golden Shower',fillerTxt:'Totally normal',type:'passive',generationReq:3,section:2,desc:'Increases the duration of a Gold Rush by 5 for each level in Golden Shower',maxLvl:10,locked:0},{name:'Gold Scanner',fillerTxt:'beep beep beep',type:'passive',generationReq:3,section:2,desc:'Increases the chance of a Gold Nugget spawning',maxLvl:10,locked:0},{name:'The Unachieveable',pic:'nothing',fillerTxt:'Unachieveable',type:'bleh',generationReq:100,section:2,desc:'This shouldnt be achievable',maxLvl:999,locked:1,requires:[['Master of None',1]]},{name:'Managerial Mastery',pic:'manager-mastery',fillerTxt:'Manager workshop - Become a better manager today!',type:'passive',generationReq:2,section:3,desc:'Increase your total OpS by 10% for each level in Managerial Mastery',maxLvl:5,locked:1,drawLines:[{from:'right',to:'Tax Break'}],requires:[['The Start',1]]},{name:'Tax Break',pic:'tax-break',fillerTxt:'Donald Trump up in here',type:'active',generationReq:5,section:3,desc:'For 5 seconds, all your buildings has double production',maxLvl:5,locked:1,requires:[['Managerial Mastery',5]]}];