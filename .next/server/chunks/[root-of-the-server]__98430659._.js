module.exports = {

"[project]/.next-internal/server/app/api/generate-card/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/canvas [external] (canvas, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("canvas", () => require("canvas"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/app/api/generate-card/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/canvas [external] (canvas, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
const fontPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "public/fonts/NotoSansJP-Regular.ttf");
(0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$29$__["registerFont"])(fontPath, {
    family: "Noto Sans JP"
});
async function POST(request) {
    try {
        const formData = await request.formData();
        const data = {
            name: formData.get("name"),
            birthMonth: formData.get("birthMonth"),
            birthDay: formData.get("birthDay"),
            department: formData.get("department"),
            grade: formData.get("grade"),
            hometown: formData.get("hometown"),
            mbti: formData.get("mbti"),
            recentBoom: formData.get("recentBoom"),
            skill: formData.get("skill"),
            part: formData.get("part"),
            recentNews: formData.get("recentNews"),
            favoriteBand: formData.get("favoriteBand"),
            rankingLabel: formData.get("rankingLabel"),
            ranking1: formData.get("ranking1"),
            ranking2: formData.get("ranking2"),
            ranking3: formData.get("ranking3"),
            comment: formData.get("comment"),
            // font: formData.get("font") as string,
            color: formData.get("color")
        };
        // Canvas作成
        const canvas = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$canvas__$5b$external$5d$__$28$canvas$2c$__cjs$29$__["createCanvas"])(600, 800);
        const ctx = canvas.getContext("2d");
        // 背景グラデーション設定
        const colorMap = {
            pink: {
                colors: [
                    "#fce7f3",
                    "#fed7aa"
                ]
            },
            blue: {
                colors: [
                    "#dbeafe",
                    "#a7f3d0"
                ]
            },
            green: {
                colors: [
                    "#dcfce7",
                    "#a7f3d0"
                ]
            },
            purple: {
                colors: [
                    "#e9d5ff",
                    "#fce7f3"
                ]
            },
            yellow: {
                colors: [
                    "#fef3c7",
                    "#fed7aa"
                ]
            }
        };
        const selectedColor = colorMap[data.color] || colorMap.pink;
        // グラデーション背景
        const gradient = ctx.createLinearGradient(0, 0, 600, 800);
        gradient.addColorStop(0, selectedColor.colors[0]);
        gradient.addColorStop(1, selectedColor.colors[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 600, 800);
        // 角丸四角形を描画する関数
        function roundRect(x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }
        // テキストを描画する関数
        function drawText(text, x, y, fontSize, color = "#1f2937", maxWidth) {
            ctx.fillStyle = color;
            ctx.font = `${fontSize}px "Noto Sans JP"`;
            if (maxWidth) {
                ctx.fillText(text, x, y, maxWidth);
            } else {
                ctx.fillText(text, x, y);
            }
        }
        // ラベル付きボックスを描画する関数
        function drawLabeledBox(x, y, width, height, label, value) {
            // 白い背景
            ctx.fillStyle = "white";
            roundRect(x, y, width, height, 8);
            ctx.fill();
            // ラベル
            drawText(label, x + 15, y + 25, 12, "#6b7280");
            // 値
            drawText(value || "未入力", x + 15, y + 45, 16, "#1f2937", width - 30);
        }
        let currentY = 40;
        // タイトル
        drawText("【自己紹介カード】", 300, currentY + 25, 32, "#3b82f6");
        ctx.textAlign = "start";
        currentY += 70;
        // 名前
        drawLabeledBox(40, currentY, 520, 60, "名前（ニックネーム）", data.name);
        currentY += 80;
        // 誕生日
        const birthText = data.birthMonth && data.birthDay ? `${data.birthMonth}月 ${data.birthDay}日` : "未入力";
        drawLabeledBox(40, currentY, 520, 60, "誕生日", birthText);
        currentY += 80;
        // 学部・学年
        drawLabeledBox(40, currentY, 250, 60, "学部", data.department);
        drawLabeledBox(310, currentY, 250, 60, "学年", data.grade ? `${data.grade}年` : "");
        currentY += 80;
        // 出身・MBTI
        drawLabeledBox(40, currentY, 250, 60, "出身", data.hometown);
        drawLabeledBox(310, currentY, 250, 60, "MBTI", data.mbti);
        currentY += 80;
        // 最近のマイブーム・特技
        drawLabeledBox(40, currentY, 250, 60, "最近のマイブーム", data.recentBoom);
        drawLabeledBox(310, currentY, 250, 60, "特技", data.skill);
        currentY += 80;
        // パート・最近のニュース
        drawLabeledBox(40, currentY, 250, 60, "高校の部活", data.part);
        drawLabeledBox(310, currentY, 250, 60, "最近のニュース", data.recentNews);
        currentY += 80;
        // 好きなバンド・ランキング
        drawLabeledBox(40, currentY, 250, 80, "好きな食べ物", data.favoriteBand);
        // ランキングボックス
        ctx.fillStyle = "white";
        roundRect(310, currentY, 250, 80, 8);
        ctx.fill();
        drawText(`${data.rankingLabel || "ランキング"}`, 325, currentY + 25, 12, "#6b7280");
        drawText(`1. ${data.ranking1 || "未入力"}`, 325, currentY + 45, 14);
        drawText(`2. ${data.ranking2 || "未入力"}`, 325, currentY + 60, 14);
        drawText(`3. ${data.ranking3 || "未入力"}`, 325, currentY + 75, 14);
        currentY += 100;
        // ひとこと
        drawLabeledBox(40, currentY, 520, 80, "ひとこと", data.comment);
        // PNG形式で出力
        const buffer = canvas.toBuffer("image/png");
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](buffer, {
            headers: {
                "Content-Type": "image/png",
                "Content-Length": buffer.length.toString()
            }
        });
    } catch (error) {
        console.error("画像生成エラー:", error);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"]("画像生成に失敗しました", {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__98430659._.js.map