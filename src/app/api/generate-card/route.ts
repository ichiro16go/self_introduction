import { type NextRequest, NextResponse } from "next/server"
import { createCanvas } from "canvas"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const data = {
      name: formData.get("name") as string,
      birthMonth: formData.get("birthMonth") as string,
      birthDay: formData.get("birthDay") as string,
      department: formData.get("department") as string,
      grade: formData.get("grade") as string,
      hometown: formData.get("hometown") as string,
      mbti: formData.get("mbti") as string,
      recentBoom: formData.get("recentBoom") as string,
      skill: formData.get("skill") as string,
      part: formData.get("part") as string,
      recentNews: formData.get("recentNews") as string,
      favoriteBand: formData.get("favoriteBand") as string,
      rankingLabel: formData.get("rankingLabel") as string,
      ranking1: formData.get("ranking1") as string,
      ranking2: formData.get("ranking2") as string,
      ranking3: formData.get("ranking3") as string,
      comment: formData.get("comment") as string,
      // font: formData.get("font") as string,
      color: formData.get("color") as string,
    }

    // Canvas作成
    const canvas = createCanvas(600, 800)
    const ctx = canvas.getContext("2d")

    // 背景グラデーション設定
    const colorMap: Record<string, { colors: [string, string] }> = {
      pink: { colors: ["#fce7f3", "#fed7aa"] },
      blue: { colors: ["#dbeafe", "#a7f3d0"] },
      green: { colors: ["#dcfce7", "#a7f3d0"] },
      purple: { colors: ["#e9d5ff", "#fce7f3"] },
      yellow: { colors: ["#fef3c7", "#fed7aa"] },
    }

    const selectedColor = colorMap[data.color] || colorMap.pink

    // グラデーション背景
    const gradient = ctx.createLinearGradient(0, 0, 600, 800)
    gradient.addColorStop(0, selectedColor.colors[0])
    gradient.addColorStop(1, selectedColor.colors[1])
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 600, 800)

    // 角丸四角形を描画する関数
    function roundRect(x: number, y: number, width: number, height: number, radius: number) {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    }

    // テキストを描画する関数
    function drawText(text: string, x: number, y: number, fontSize: number, color = "#1f2937", maxWidth?: number) {
      ctx.fillStyle = color
      ctx.font = `${fontSize}px system-ui`
      if (maxWidth) {
        ctx.fillText(text, x, y, maxWidth)
      } else {
        ctx.fillText(text, x, y)
      }
    }

    // ラベル付きボックスを描画する関数
    function drawLabeledBox(x: number, y: number, width: number, height: number, label: string, value: string) {
      // 白い背景
      ctx.fillStyle = "white"
      roundRect(x, y, width, height, 8)
      ctx.fill()

      // ラベル
      drawText(label, x + 15, y + 25, 12, "#6b7280")

      // 値
      drawText(value || "未入力", x + 15, y + 45, 16, "#1f2937", width - 30)
    }

    let currentY = 40

    // タイトル
    drawText("【自己紹介カード】", 300, currentY + 25, 32, "#3b82f6")
    ctx.textAlign = "start"
    currentY += 70

    // 名前
    drawLabeledBox(40, currentY, 520, 60, "名前（ニックネーム）", data.name)
    currentY += 80

    // 誕生日
    const birthText = data.birthMonth && data.birthDay ? `${data.birthMonth}月 ${data.birthDay}日` : "未入力"
    drawLabeledBox(40, currentY, 520, 60, "誕生日", birthText)
    currentY += 80

    // 学部・学年
    drawLabeledBox(40, currentY, 250, 60, "学部", data.department)
    drawLabeledBox(310, currentY, 250, 60, "学年", data.grade ? `${data.grade}年` : "")
    currentY += 80

    // 出身・MBTI
    drawLabeledBox(40, currentY, 250, 60, "出身", data.hometown)
    drawLabeledBox(310, currentY, 250, 60, "MBTI", data.mbti)
    currentY += 80

    // 最近のマイブーム・特技
    drawLabeledBox(40, currentY, 250, 60, "最近のマイブーム", data.recentBoom)
    drawLabeledBox(310, currentY, 250, 60, "特技", data.skill)
    currentY += 80

    // パート・最近のニュース
    drawLabeledBox(40, currentY, 250, 60, "高校の部活", data.part)
    drawLabeledBox(310, currentY, 250, 60, "最近のニュース", data.recentNews)
    currentY += 80

    // 好きなバンド・ランキング
    drawLabeledBox(40, currentY, 250, 80, "好きな食べ物", data.favoriteBand)

    // ランキングボックス
    ctx.fillStyle = "white"
    roundRect(310, currentY, 250, 80, 8)
    ctx.fill()
    drawText(`${data.rankingLabel || "ランキング"}`, 325, currentY + 25, 12, "#6b7280")
    drawText(`1. ${data.ranking1 || "未入力"}`, 325, currentY + 45, 14)
    drawText(`2. ${data.ranking2 || "未入力"}`, 325, currentY + 60, 14)
    drawText(`3. ${data.ranking3 || "未入力"}`, 325, currentY + 75, 14)
    currentY += 100

    // ひとこと
    drawLabeledBox(40, currentY, 520, 80, "ひとこと", data.comment)

    // PNG形式で出力
    const buffer = canvas.toBuffer("image/png")

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Length": buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("画像生成エラー:", error)
    return new NextResponse("画像生成に失敗しました", { status: 500 })
  }
}
