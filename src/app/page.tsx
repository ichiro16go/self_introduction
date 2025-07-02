"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, ImageIcon } from "lucide-react"

interface FormData {
  name: string
  birthMonth: string
  birthDay: string
  department: string
  grade: string
  hometown: string
  mbti: string
  recentBoom: string
  skill: string
  part: string
  recentNews: string
  favoriteBand: string
  rankingLabel: string
  ranking1: string
  ranking2: string
  ranking3: string
  comment: string
  font: string
  color: string
  image?: File
}

const fonts = [
  { value: "noto-sans", label: "Noto Sans JP" },
  { value: "zen-kaku", label: "Zen Kaku Gothic New" },
  { value: "kosugi", label: "Kosugi" },
  { value: "sawarabi", label: "Sawarabi Gothic" },
]

const colors = [
  { value: "pink", label: "ピンクグラデーション", gradient: "from-pink-200 to-orange-200" },
  { value: "blue", label: "ブルーグラデーション", gradient: "from-blue-200 to-cyan-200" },
  { value: "green", label: "グリーングラデーション", gradient: "from-green-200 to-emerald-200" },
  { value: "purple", label: "パープルグラデーション", gradient: "from-purple-200 to-pink-200" },
  { value: "yellow", label: "イエローグラデーション", gradient: "from-yellow-200 to-orange-200" },
]

export default function SelfIntroCardGenerator() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    birthMonth: "",
    birthDay: "",
    department: "",
    grade: "",
    hometown: "",
    mbti: "",
    recentBoom: "",
    skill: "",
    part: "",
    recentNews: "",
    favoriteBand: "",
    rankingLabel: "",
    ranking1: "",
    ranking2: "",
    ranking3: "",
    comment: "",
    font: "noto-sans",
    color: "pink",
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))
    }
  }

  const generateCard = async () => {
    setIsGenerating(true)
    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value)
        } else {
          formDataToSend.append(key, value)
        }
      })

      const response = await fetch("/api/generate-card", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setGeneratedImageUrl(url)
      } else {
        console.error("画像生成に失敗しました")
      }
    } catch (error) {
      console.error("エラーが発生しました:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadImage = () => {
    if (generatedImageUrl) {
      const link = document.createElement("a")
      link.href = generatedImageUrl
      link.download = "self-intro-card.png"
      link.click()
    }
  }

  const selectedColor = colors.find((c) => c.value === formData.color)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">自己紹介カード生成アプリ</h1>
          <p className="text-gray-600">フォームに入力して、オリジナルの自己紹介カードを作成しましょう</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* フォーム部分 */}
          <Card>
            <CardHeader>
              <CardTitle>自己紹介情報を入力</CardTitle>
              <CardDescription>各項目を入力して、あなただけの自己紹介カードを作成してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 基本情報 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">基本情報</h3>
                <div>
                  <Label htmlFor="name">名前（ニックネーム）</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="山田太郎"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="birthMonth">誕生月</Label>
                    <Input
                      id="birthMonth"
                      value={formData.birthMonth}
                      onChange={(e) => handleInputChange("birthMonth", e.target.value)}
                      placeholder="12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDay">誕生日</Label>
                    <Input
                      id="birthDay"
                      value={formData.birthDay}
                      onChange={(e) => handleInputChange("birthDay", e.target.value)}
                      placeholder="25"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">学部</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      placeholder="工学部"
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade">学年</Label>
                    <Input
                      id="grade"
                      value={formData.grade}
                      onChange={(e) => handleInputChange("grade", e.target.value)}
                      placeholder="2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hometown">出身</Label>
                    <Input
                      id="hometown"
                      value={formData.hometown}
                      onChange={(e) => handleInputChange("hometown", e.target.value)}
                      placeholder="東京都"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mbti">MBTI</Label>
                    <Input
                      id="mbti"
                      value={formData.mbti}
                      onChange={(e) => handleInputChange("mbti", e.target.value)}
                      placeholder="ENFP"
                    />
                  </div>
                </div>
              </div>

              {/* 詳細情報 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">詳細情報</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recentBoom">最近のマイブーム</Label>
                    <Input
                      id="recentBoom"
                      value={formData.recentBoom}
                      onChange={(e) => handleInputChange("recentBoom", e.target.value)}
                      placeholder="読書"
                    />
                  </div>
                  <div>
                    <Label htmlFor="skill">特技</Label>
                    <Input
                      id="skill"
                      value={formData.skill}
                      onChange={(e) => handleInputChange("skill", e.target.value)}
                      placeholder="料理"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="part">高校の部活</Label>
                    <Input
                      id="part"
                      value={formData.part}
                      onChange={(e) => handleInputChange("part", e.target.value)}
                      placeholder="バスケットボール"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recentNews">最近のニュース</Label>
                    <Input
                      id="recentNews"
                      value={formData.recentNews}
                      onChange={(e) => handleInputChange("recentNews", e.target.value)}
                      placeholder="資格取得"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="favoriteBand">好きな食べ物</Label>
                  <Input
                    id="favoriteBand"
                    value={formData.favoriteBand}
                    onChange={(e) => handleInputChange("favoriteBand", e.target.value)}
                    placeholder="Official髭男dism"
                  />
                </div>
                <div className="space-y-2">
                  <Label>ランキング</Label>
                  <div className="space-y-2">
                    <Input
                      value={formData.rankingLabel}
                      onChange={(e) => handleInputChange("rankingLabel", e.target.value)}
                      placeholder="ランキング名"
                    />
                    <Input
                      value={formData.ranking1}
                      onChange={(e) => handleInputChange("ranking1", e.target.value)}
                      placeholder="1位"
                    />
                    <Input
                      value={formData.ranking2}
                      onChange={(e) => handleInputChange("ranking2", e.target.value)}
                      placeholder="2位"
                    />
                    <Input
                      value={formData.ranking3}
                      onChange={(e) => handleInputChange("ranking3", e.target.value)}
                      placeholder="3位"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="comment">ひとこと</Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => handleInputChange("comment", e.target.value)}
                    placeholder="よろしくお願いします！"
                    rows={3}
                  />
                </div>
              </div>

              {/* デザイン設定 */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">デザイン設定</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="font">フォント</Label>
                    <Select value={formData.font} onValueChange={(value) => handleInputChange("font", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fonts.map((font) => (
                          <SelectItem key={font.value} value={font.value}>
                            {font.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="color">カラー</Label>
                    <Select value={formData.color} onValueChange={(value) => handleInputChange("color", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {colors.map((color) => (
                          <SelectItem key={color.value} value={color.value}>
                            {color.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="image">画像アップロード（オプション）</Label>
                  <div className="mt-2">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
              </div>

              <Button onClick={generateCard} disabled={isGenerating || !formData.name} className="w-full" size="lg">
                <ImageIcon className="mr-2 h-4 w-4" />
                {isGenerating ? "生成中..." : "画像を生成"}
              </Button>
            </CardContent>
          </Card>

          {/* プレビュー部分 */}
          <Card>
            <CardHeader>
              <CardTitle>プレビュー</CardTitle>
              <CardDescription>生成された自己紹介カードがここに表示されます</CardDescription>
            </CardHeader>
            <CardContent>
              {generatedImageUrl ? (
                <div className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src={generatedImageUrl || "/placeholder.svg"}
                      alt="生成された自己紹介カード"
                      className="w-full h-auto"
                    />
                  </div>
                  <Button onClick={downloadImage} className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    画像をダウンロード
                  </Button>
                </div>
              ) : (
                <div
                  className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${selectedColor?.gradient} flex items-center justify-center border-2 border-dashed border-gray-300`}
                >
                  <div className="text-center text-gray-500">
                    <ImageIcon className="mx-auto h-12 w-12 mb-2" />
                    <p>
                      フォームに入力して「画像を生成」ボタンを
                      <br />
                      クリックしてください
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
