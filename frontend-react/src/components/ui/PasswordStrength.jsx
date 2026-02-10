import React, { useMemo } from 'react';

const PasswordStrength = ({ password }) => {
    const strength = useMemo(() => {
        if (!password) return { score: 0, label: '', color: '' };

        let score = 0;
        const checks = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password),
        };

        // Calculate score
        if (checks.length) score++;
        if (checks.uppercase) score++;
        if (checks.lowercase) score++;
        if (checks.number) score++;
        if (checks.special) score++;

        // Determine strength
        if (score <= 2) {
            return { score, label: 'Weak', color: 'bg-red-500', textColor: 'text-red-600', checks };
        } else if (score <= 3) {
            return { score, label: 'Fair', color: 'bg-yellow-500', textColor: 'text-yellow-600', checks };
        } else if (score === 4) {
            return { score, label: 'Good', color: 'bg-blue-500', textColor: 'text-blue-600', checks };
        } else {
            return { score, label: 'Strong', color: 'bg-green-500', textColor: 'text-green-600', checks };
        }
    }, [password]);

    if (!password) return null;

    return (
        <div className="space-y-3">
            {/* Strength Bar */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-600">Password strength:</span>
                    <span className={`text-sm font-semibold ${strength.textColor}`}>
                        {strength.label}
                    </span>
                </div>
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                        <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-colors ${level <= strength.score ? strength.color : 'bg-neutral-200'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Requirements Checklist */}
            <div className="space-y-1">
                <p className="text-xs text-neutral-500 mb-2">Password must contain:</p>
                <div className="grid grid-cols-2 gap-1">
                    <RequirementItem met={strength.checks?.length} text="8+ characters" />
                    <RequirementItem met={strength.checks?.uppercase} text="Uppercase" />
                    <RequirementItem met={strength.checks?.lowercase} text="Lowercase" />
                    <RequirementItem met={strength.checks?.number} text="Number" />
                </div>
                <RequirementItem met={strength.checks?.special} text="Special character (!@#$%^&*)" />
            </div>
        </div>
    );
};

const RequirementItem = ({ met, text }) => {
    return (
        <div className="flex items-center space-x-2">
            <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${met ? 'bg-green-100' : 'bg-neutral-100'
                }`}>
                {met ? (
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </div>
            <span className={`text-xs ${met ? 'text-green-700' : 'text-neutral-500'}`}>
                {text}
            </span>
        </div>
    );
};

export default PasswordStrength;
