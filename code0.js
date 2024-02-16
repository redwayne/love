gdjs.Main_32sceneCode = {};
gdjs.Main_32sceneCode.GDeyez_9595idleObjects1= [];
gdjs.Main_32sceneCode.GDeyez_9595idleObjects2= [];
gdjs.Main_32sceneCode.GDeyez_9595idleObjects3= [];
gdjs.Main_32sceneCode.GDeyez_9595idleObjects4= [];
gdjs.Main_32sceneCode.GDeyez_9595openingObjects1= [];
gdjs.Main_32sceneCode.GDeyez_9595openingObjects2= [];
gdjs.Main_32sceneCode.GDeyez_9595openingObjects3= [];
gdjs.Main_32sceneCode.GDeyez_9595openingObjects4= [];
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1= [];
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects2= [];
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects3= [];
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects4= [];
gdjs.Main_32sceneCode.GDHeart_9595staticObjects1= [];
gdjs.Main_32sceneCode.GDHeart_9595staticObjects2= [];
gdjs.Main_32sceneCode.GDHeart_9595staticObjects3= [];
gdjs.Main_32sceneCode.GDHeart_9595staticObjects4= [];
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1= [];
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects2= [];
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3= [];
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects4= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects2= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects4= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects2= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3= [];
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects4= [];
gdjs.Main_32sceneCode.GDtransperent1Objects1= [];
gdjs.Main_32sceneCode.GDtransperent1Objects2= [];
gdjs.Main_32sceneCode.GDtransperent1Objects3= [];
gdjs.Main_32sceneCode.GDtransperent1Objects4= [];
gdjs.Main_32sceneCode.GDtext1Objects1= [];
gdjs.Main_32sceneCode.GDtext1Objects2= [];
gdjs.Main_32sceneCode.GDtext1Objects3= [];
gdjs.Main_32sceneCode.GDtext1Objects4= [];
gdjs.Main_32sceneCode.GDwhite_9595boomObjects1= [];
gdjs.Main_32sceneCode.GDwhite_9595boomObjects2= [];
gdjs.Main_32sceneCode.GDwhite_9595boomObjects3= [];
gdjs.Main_32sceneCode.GDwhite_9595boomObjects4= [];
gdjs.Main_32sceneCode.GDheart_9595beatObjects1= [];
gdjs.Main_32sceneCode.GDheart_9595beatObjects2= [];
gdjs.Main_32sceneCode.GDheart_9595beatObjects3= [];
gdjs.Main_32sceneCode.GDheart_9595beatObjects4= [];
gdjs.Main_32sceneCode.GDtext2Objects1= [];
gdjs.Main_32sceneCode.GDtext2Objects2= [];
gdjs.Main_32sceneCode.GDtext2Objects3= [];
gdjs.Main_32sceneCode.GDtext2Objects4= [];
gdjs.Main_32sceneCode.GDtext3Objects1= [];
gdjs.Main_32sceneCode.GDtext3Objects2= [];
gdjs.Main_32sceneCode.GDtext3Objects3= [];
gdjs.Main_32sceneCode.GDtext3Objects4= [];
gdjs.Main_32sceneCode.GDpow1Objects1= [];
gdjs.Main_32sceneCode.GDpow1Objects2= [];
gdjs.Main_32sceneCode.GDpow1Objects3= [];
gdjs.Main_32sceneCode.GDpow1Objects4= [];
gdjs.Main_32sceneCode.GDpow2Objects1= [];
gdjs.Main_32sceneCode.GDpow2Objects2= [];
gdjs.Main_32sceneCode.GDpow2Objects3= [];
gdjs.Main_32sceneCode.GDpow2Objects4= [];
gdjs.Main_32sceneCode.GDpow3Objects1= [];
gdjs.Main_32sceneCode.GDpow3Objects2= [];
gdjs.Main_32sceneCode.GDpow3Objects3= [];
gdjs.Main_32sceneCode.GDpow3Objects4= [];
gdjs.Main_32sceneCode.GDkissObjects1= [];
gdjs.Main_32sceneCode.GDkissObjects2= [];
gdjs.Main_32sceneCode.GDkissObjects3= [];
gdjs.Main_32sceneCode.GDkissObjects4= [];


gdjs.Main_32sceneCode.asyncCallback8943668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Heart_static"), gdjs.Main_32sceneCode.GDHeart_9595staticObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("eyez_idle"), gdjs.Main_32sceneCode.GDeyez_9595idleObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("eyez_opening"), gdjs.Main_32sceneCode.GDeyez_9595openingObjects2);

{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idleObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595openingObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595openingObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595openingObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595openingObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDHeart_9595staticObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDHeart_9595staticObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDHeart_9595staticObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDHeart_9595staticObjects2[i].getBehavior("Tween").addObjectPositionTween2("heart1", 600, 780, "easeInOutExpo", 3, false);
}
}}
gdjs.Main_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Main_32sceneCode.GDHeart_9595staticObjects1) asyncObjectsList.addObject("Heart_static", obj);
for (const obj of gdjs.Main_32sceneCode.GDeyez_9595idleObjects1) asyncObjectsList.addObject("eyez_idle", obj);
for (const obj of gdjs.Main_32sceneCode.GDeyez_9595openingObjects1) asyncObjectsList.addObject("eyez_opening", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Main_32sceneCode.asyncCallback8943668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32sceneCode.asyncCallback8945700 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("white_boom"), gdjs.Main_32sceneCode.GDwhite_9595boomObjects4);
{for(var i = 0, len = gdjs.Main_32sceneCode.GDwhite_9595boomObjects4.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDwhite_9595boomObjects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDwhite_9595boomObjects4.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDwhite_9595boomObjects4[i].getBehavior("Animation").resumeAnimation();
}
}}
gdjs.Main_32sceneCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Main_32sceneCode.asyncCallback8945700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32sceneCode.asyncCallback8207300 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("fx_sparkles"), gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3);
gdjs.copyArray(runtimeScene.getObjects("fx_sparkles2"), gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3);
gdjs.copyArray(runtimeScene.getObjects("fx_sparkles3"), gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3);
gdjs.copyArray(runtimeScene.getObjects("text1"), gdjs.Main_32sceneCode.GDtext1Objects3);
{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3[i].getBehavior("Tween").addObjectOpacityTween2("fx1", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3[i].getBehavior("Tween").addObjectOpacityTween2("fx1", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3[i].getBehavior("Tween").addObjectOpacityTween2("fx1", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext1Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext1Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext1Objects3.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext1Objects3[i].getBehavior("Tween").addObjectOpacityTween2("text", 255, "easeOutExpo", 2, false);
}
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32sceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32sceneCode.asyncCallback8207300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32sceneCode.asyncCallback9120380 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Heart_static"), gdjs.Main_32sceneCode.GDHeart_9595staticObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("eyez_idle2"), gdjs.Main_32sceneCode.GDeyez_9595idle2Objects2);

{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idle2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("idle2", 0, "easeOutQuint", 2, false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDHeart_9595staticObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDHeart_9595staticObjects2[i].getBehavior("Tween").addObjectPositionTween2("heart1", 600, 250, "easeOutQuint", 2, false);
}
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1) asyncObjectsList.addObject("eyez_idle2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.02), (runtimeScene) => (gdjs.Main_32sceneCode.asyncCallback9120380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32sceneCode.asyncCallback9300668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("heart_beat"), gdjs.Main_32sceneCode.GDheart_9595beatObjects2);
gdjs.copyArray(runtimeScene.getObjects("kiss"), gdjs.Main_32sceneCode.GDkissObjects2);
gdjs.copyArray(runtimeScene.getObjects("pow1"), gdjs.Main_32sceneCode.GDpow1Objects2);
gdjs.copyArray(runtimeScene.getObjects("pow2"), gdjs.Main_32sceneCode.GDpow2Objects2);
gdjs.copyArray(runtimeScene.getObjects("pow3"), gdjs.Main_32sceneCode.GDpow3Objects2);
gdjs.copyArray(runtimeScene.getObjects("text3"), gdjs.Main_32sceneCode.GDtext3Objects2);
gdjs.copyArray(runtimeScene.getObjects("transperent1"), gdjs.Main_32sceneCode.GDtransperent1Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("white_boom"), gdjs.Main_32sceneCode.GDwhite_9595boomObjects2);

{for(var i = 0, len = gdjs.Main_32sceneCode.GDtransperent1Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtransperent1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDwhite_9595boomObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDwhite_9595boomObjects2[i].getBehavior("Tween").addObjectOpacityTween2("white", 0, "linear", 2, false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDheart_9595beatObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDheart_9595beatObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDheart_9595beatObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDheart_9595beatObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext3Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow1Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow2Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow3Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDkissObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDkissObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow1Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow1Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow2Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow2Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow3Objects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow3Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDkissObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDkissObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}
gdjs.Main_32sceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Main_32sceneCode.GDwhite_9595boomObjects1) asyncObjectsList.addObject("white_boom", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32sceneCode.asyncCallback9300668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart_static"), gdjs.Main_32sceneCode.GDHeart_9595staticObjects1);
gdjs.copyArray(runtimeScene.getObjects("eyez_idle"), gdjs.Main_32sceneCode.GDeyez_9595idleObjects1);
gdjs.copyArray(runtimeScene.getObjects("eyez_idle2"), gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1);
gdjs.copyArray(runtimeScene.getObjects("eyez_opening"), gdjs.Main_32sceneCode.GDeyez_9595openingObjects1);
gdjs.copyArray(runtimeScene.getObjects("fx_sparkles"), gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1);
gdjs.copyArray(runtimeScene.getObjects("fx_sparkles2"), gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1);
gdjs.copyArray(runtimeScene.getObjects("fx_sparkles3"), gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1);
gdjs.copyArray(runtimeScene.getObjects("heart_beat"), gdjs.Main_32sceneCode.GDheart_9595beatObjects1);
gdjs.copyArray(runtimeScene.getObjects("kiss"), gdjs.Main_32sceneCode.GDkissObjects1);
gdjs.copyArray(runtimeScene.getObjects("pow1"), gdjs.Main_32sceneCode.GDpow1Objects1);
gdjs.copyArray(runtimeScene.getObjects("pow2"), gdjs.Main_32sceneCode.GDpow2Objects1);
gdjs.copyArray(runtimeScene.getObjects("pow3"), gdjs.Main_32sceneCode.GDpow3Objects1);
gdjs.copyArray(runtimeScene.getObjects("text1"), gdjs.Main_32sceneCode.GDtext1Objects1);
gdjs.copyArray(runtimeScene.getObjects("text3"), gdjs.Main_32sceneCode.GDtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("transperent1"), gdjs.Main_32sceneCode.GDtransperent1Objects1);
gdjs.copyArray(runtimeScene.getObjects("white_boom"), gdjs.Main_32sceneCode.GDwhite_9595boomObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Main scene");
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtransperent1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtransperent1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDwhite_9595boomObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDwhite_9595boomObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idleObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595openingObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595openingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDHeart_9595staticObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDHeart_9595staticObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDheart_9595beatObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDheart_9595beatObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDkissObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDkissObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idleObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idleObjects1[i].setPosition(473,132);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595openingObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595openingObjects1[i].setPosition(473,0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i].setPosition(473,0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDHeart_9595staticObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDHeart_9595staticObjects1[i].setPosition(600,1300);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1[i].setPosition(590,270);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow2Objects1[i].setPosition(700,350);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1[i].setPosition(700,400);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow2Objects1[i].setPosition(500,200);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1[i].setPosition(1100,550);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDpow3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDpow3Objects1[i].setPosition(1300,300);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtransperent1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtransperent1Objects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDwhite_9595boomObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDwhite_9595boomObjects1[i].setPosition(-(95),-(140));
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext1Objects1[i].setPosition(430,96);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext3Objects1[i].setPosition(380,96);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDheart_9595beatObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDheart_9595beatObjects1[i].setPosition(600,250);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDkissObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDkissObjects1[i].setPosition(790,750);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtransperent1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtransperent1Objects1[i].getBehavior("Opacity").setOpacity(100);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idleObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idleObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idleObjects1[i].getBehavior("Tween").addObjectPositionTween2("eyez", 473, 0, "easeOutExpo", 2, false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idleObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eyez_opening"), gdjs.Main_32sceneCode.GDeyez_9595openingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32sceneCode.GDeyez_9595openingObjects1.length;i<l;++i) {
    if ( gdjs.Main_32sceneCode.GDeyez_9595openingObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32sceneCode.GDeyez_9595openingObjects1[k] = gdjs.Main_32sceneCode.GDeyez_9595openingObjects1[i];
        ++k;
    }
}
gdjs.Main_32sceneCode.GDeyez_9595openingObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eyez_idle2"), gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1);
/* Reuse gdjs.Main_32sceneCode.GDeyez_9595openingObjects1 */
{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595openingObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595openingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eyez_idle2"), gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length;i<l;++i) {
    if ( gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[k] = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i];
        ++k;
    }
}
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1 */
{for(var i = 0, len = gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1[i].getBehavior("Tween").addObjectPositionTween2("idle2", 473, -(200), "easeOutQuart", 1, false);
}
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("white_boom"), gdjs.Main_32sceneCode.GDwhite_9595boomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32sceneCode.GDwhite_9595boomObjects1.length;i<l;++i) {
    if ( gdjs.Main_32sceneCode.GDwhite_9595boomObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32sceneCode.GDwhite_9595boomObjects1[k] = gdjs.Main_32sceneCode.GDwhite_9595boomObjects1[i];
        ++k;
    }
}
gdjs.Main_32sceneCode.GDwhite_9595boomObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart_static"), gdjs.Main_32sceneCode.GDHeart_9595staticObjects1);
gdjs.copyArray(runtimeScene.getObjects("text1"), gdjs.Main_32sceneCode.GDtext1Objects1);
{for(var i = 0, len = gdjs.Main_32sceneCode.GDHeart_9595staticObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDHeart_9595staticObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDtext1Objects1[i].hide();
}
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32sceneCode.GDeyez_9595idleObjects1.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idleObjects2.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idleObjects3.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idleObjects4.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595openingObjects1.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595openingObjects2.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595openingObjects3.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595openingObjects4.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects1.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects2.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects3.length = 0;
gdjs.Main_32sceneCode.GDeyez_9595idle2Objects4.length = 0;
gdjs.Main_32sceneCode.GDHeart_9595staticObjects1.length = 0;
gdjs.Main_32sceneCode.GDHeart_9595staticObjects2.length = 0;
gdjs.Main_32sceneCode.GDHeart_9595staticObjects3.length = 0;
gdjs.Main_32sceneCode.GDHeart_9595staticObjects4.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects1.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects2.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects3.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparklesObjects4.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects1.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects2.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects3.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles2Objects4.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects1.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects2.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects3.length = 0;
gdjs.Main_32sceneCode.GDfx_9595sparkles3Objects4.length = 0;
gdjs.Main_32sceneCode.GDtransperent1Objects1.length = 0;
gdjs.Main_32sceneCode.GDtransperent1Objects2.length = 0;
gdjs.Main_32sceneCode.GDtransperent1Objects3.length = 0;
gdjs.Main_32sceneCode.GDtransperent1Objects4.length = 0;
gdjs.Main_32sceneCode.GDtext1Objects1.length = 0;
gdjs.Main_32sceneCode.GDtext1Objects2.length = 0;
gdjs.Main_32sceneCode.GDtext1Objects3.length = 0;
gdjs.Main_32sceneCode.GDtext1Objects4.length = 0;
gdjs.Main_32sceneCode.GDwhite_9595boomObjects1.length = 0;
gdjs.Main_32sceneCode.GDwhite_9595boomObjects2.length = 0;
gdjs.Main_32sceneCode.GDwhite_9595boomObjects3.length = 0;
gdjs.Main_32sceneCode.GDwhite_9595boomObjects4.length = 0;
gdjs.Main_32sceneCode.GDheart_9595beatObjects1.length = 0;
gdjs.Main_32sceneCode.GDheart_9595beatObjects2.length = 0;
gdjs.Main_32sceneCode.GDheart_9595beatObjects3.length = 0;
gdjs.Main_32sceneCode.GDheart_9595beatObjects4.length = 0;
gdjs.Main_32sceneCode.GDtext2Objects1.length = 0;
gdjs.Main_32sceneCode.GDtext2Objects2.length = 0;
gdjs.Main_32sceneCode.GDtext2Objects3.length = 0;
gdjs.Main_32sceneCode.GDtext2Objects4.length = 0;
gdjs.Main_32sceneCode.GDtext3Objects1.length = 0;
gdjs.Main_32sceneCode.GDtext3Objects2.length = 0;
gdjs.Main_32sceneCode.GDtext3Objects3.length = 0;
gdjs.Main_32sceneCode.GDtext3Objects4.length = 0;
gdjs.Main_32sceneCode.GDpow1Objects1.length = 0;
gdjs.Main_32sceneCode.GDpow1Objects2.length = 0;
gdjs.Main_32sceneCode.GDpow1Objects3.length = 0;
gdjs.Main_32sceneCode.GDpow1Objects4.length = 0;
gdjs.Main_32sceneCode.GDpow2Objects1.length = 0;
gdjs.Main_32sceneCode.GDpow2Objects2.length = 0;
gdjs.Main_32sceneCode.GDpow2Objects3.length = 0;
gdjs.Main_32sceneCode.GDpow2Objects4.length = 0;
gdjs.Main_32sceneCode.GDpow3Objects1.length = 0;
gdjs.Main_32sceneCode.GDpow3Objects2.length = 0;
gdjs.Main_32sceneCode.GDpow3Objects3.length = 0;
gdjs.Main_32sceneCode.GDpow3Objects4.length = 0;
gdjs.Main_32sceneCode.GDkissObjects1.length = 0;
gdjs.Main_32sceneCode.GDkissObjects2.length = 0;
gdjs.Main_32sceneCode.GDkissObjects3.length = 0;
gdjs.Main_32sceneCode.GDkissObjects4.length = 0;

gdjs.Main_32sceneCode.eventsList5(runtimeScene);

return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
