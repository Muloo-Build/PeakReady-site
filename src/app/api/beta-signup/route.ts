import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const RECIPIENT = "jarrud@muloo.co"
const SUBJECT = "New PeakReady Beta Tester Submission"

type BetaSignupPayload = {
    firstName?: string
    lastName?: string
    email?: string
    trainsTowardEvents?: "Yes" | "No"
    blockers?: string
    stravaProfile?: string
    ridingFrequency?: "1–2 per week" | "3–4 per week" | "5+ per week"
    targetEventDistance?: string
}

function validatePayload(payload: BetaSignupPayload): string | null {
    if (!payload.firstName?.trim()) return "First Name is required."
    if (!payload.email?.trim()) return "Email Address is required."
    if (!payload.trainsTowardEvents) return "Training toward events selection is required."
    if (!payload.blockers?.trim()) return "Feedback field is required."
    if (!payload.ridingFrequency) return "Current riding frequency is required."
    return null
}

function createEmailText(payload: Required<Pick<BetaSignupPayload, "firstName" | "email" | "trainsTowardEvents" | "blockers" | "ridingFrequency">> & BetaSignupPayload): string {
    return [
        "New PeakReady beta tester request:",
        "",
        `First Name: ${payload.firstName}`,
        `Last Name: ${payload.lastName?.trim() || "(not provided)"}`,
        `Email Address: ${payload.email}`,
        `Currently training toward events: ${payload.trainsTowardEvents}`,
        `What would stop you from using an app like this: ${payload.blockers}`,
        `Strava profile link: ${payload.stravaProfile?.trim() || "(not provided)"}`,
        `Current riding frequency: ${payload.ridingFrequency}`,
        `Target event distance: ${payload.targetEventDistance?.trim() || "(not provided)"}`,
    ].join("\n")
}

export async function POST(request: Request) {
    try {
        const payload = (await request.json()) as BetaSignupPayload
        const validationError = validatePayload(payload)

        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 })
        }

        const smtpHost = process.env.SMTP_HOST
        const smtpPort = Number(process.env.SMTP_PORT || 587)
        const smtpUser = process.env.SMTP_USER
        const smtpPass = process.env.SMTP_PASS

        if (!smtpHost || !smtpUser || !smtpPass) {
            return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        })

        const textBody = createEmailText({
            firstName: payload.firstName!.trim(),
            lastName: payload.lastName,
            email: payload.email!.trim(),
            trainsTowardEvents: payload.trainsTowardEvents!,
            blockers: payload.blockers!.trim(),
            stravaProfile: payload.stravaProfile,
            ridingFrequency: payload.ridingFrequency!,
            targetEventDistance: payload.targetEventDistance,
        })

        await transporter.sendMail({
            from: process.env.SMTP_FROM || smtpUser,
            to: RECIPIENT,
            replyTo: payload.email,
            subject: SUBJECT,
            text: textBody,
        })

        return NextResponse.json({ ok: true })
    } catch {
        return NextResponse.json({ error: "Unable to submit request right now. Please try again." }, { status: 500 })
    }
}
