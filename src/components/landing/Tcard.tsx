import { useInView } from "../../../lib/hooks/use-in-view";

interface TCardProps {
    name: string;
    role: string;
    avatar: string;
    avatarBg: string;
    quote: string;
    delay: number
}



export function TCard({ name, role, avatar, avatarBg, quote, delay }: TCardProps) {
    const { ref, inView } = useInView()
    return (
        <div className="h-full" ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: `opacity .5s ${delay}s, transform .4s ${delay}s`, background: '#fff', borderRadius: 12, padding: '28px 24px', border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#0070B6', fontSize: 14 }}>{s}</span>)}
            </div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, marginBottom: 20, fontWeight: 500 }}>&ldquo;{quote}&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{avatar}</div>
                <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: 0 }}>{name}</p>
                    <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{role}</p>
                </div>
            </div>
        </div>
    )
}